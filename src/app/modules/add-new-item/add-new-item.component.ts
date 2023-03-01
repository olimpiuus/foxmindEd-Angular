import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, DataFetchService } from '../main/data-fetch.service';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { map } from 'rxjs';
import { getDatabase, set, ref as refData, remove } from 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.sass']
})
export class AddNewItemComponent implements OnInit {
  productForm: FormGroup;
  state = 'form';
  colorList = ['Blue', 'Grey', 'Orange', 'Black'];
  sizeList = ['S', 'L', 'XL', 'XXL'];
  imageData: any;
  newProduct: IProduct;
  id: any;
  uniqId: number;
  route = this._router.url;
  stateFom = 'new';
  oldId: number;
  db = getDatabase();
  constructor(private fb: FormBuilder, private fetch: DataFetchService, private _router: Router) {}

  ngOnInit(): void {
    this.getUniqId();
    this.productForm = this.fb.group({
      imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      main: [false],
      shop: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      shipping: [''],
      discount: ['', Validators.required],
      discountUntil: ['', Validators.required],
      new: [false],
      color: ['', Validators.required],
      size: ['', Validators.required],
      newColor: []
    });

    if (this.route.includes('edit')) {
      this.oldId = parseInt(this.route.split('/')[2]);
      this.fetch.getProductById(this.oldId).subscribe((x) => {
        this.newProduct = x!;
        this.updateFormForEditingBike();
        this.stateFom = 'edit';
      });
    }
  }

  updateFormForEditingBike() {
    this.productForm.patchValue({
      imgUrl: this.newProduct.imgUrl,
      price: this.newProduct.price,
      main: this.newProduct.main,
      shop: this.newProduct.shop,
      name: this.newProduct.name,
      description: this.newProduct.description,
      shipping: this.newProduct.shipping,
      discount: this.newProduct.discount,
      discountUntil: this.newProduct.discountUntil,
      new: this.newProduct.new,
      color: this.newProduct.color,
      size: this.newProduct.size
    });
  }

  getUniqId() {
    const uniqId = (arr: any[]): any => {
      const random0to10000 = () => Math.floor(Math.random() * 10000 + 1);
      const id = random0to10000();
      return !arr.includes(id) ? id : uniqId(arr);
    };

    this.fetch
      .getProductsArray()
      .pipe(map((products) => uniqId(Object.values(products).map((product) => product.id))))
      .subscribe((response) => (this.uniqId = response));
  }

  private get discount() {
    return this.productForm.get('discount')?.value ? this.productForm.get('discount')?.value : null;
  }

  private get shipping() {
    return this.productForm.get('shipping')?.value ? this.productForm.get('shipping')?.value : null;
  }

  private get discountUntil() {
    const value = this.productForm.get('discountUntil')?.value;
    return value ? (value instanceof Date ? value.toISOString().slice(0, -5) : value) : null;
  }

  onLoadImg(event: any) {
    const file: File = event.files[0];
    this.addFileToBase(file);
  }

  addFileToBase(file: File) {
    const storage = getStorage();
    const storageRef = ref(storage, `bike-id:${this.uniqId}`);

    uploadBytes(storageRef, file).then(() => {
      getDownloadURL(storageRef).then((url) => {
        this.productForm.get('imgUrl')!.setValue(url);
      });
    });
  }

  createProduct() {
    this.newProduct = {
      id: this.uniqId,
      name: this.productForm.get('name')?.value,
      imgUrl: this.productForm.get('imgUrl')?.value,
      price: this.productForm.get('price')?.value,
      shop: this.productForm.get('shop')?.value,
      discount: this.discount,
      main: this.productForm.get('main')?.value,
      description: this.productForm.get('description')?.value,
      shipping: this.shipping,
      new: this.productForm.get('new')?.value,
      discountUntil: this.discountUntil,
      color: this.productForm.get('color')?.value,
      size: this.productForm.get('size')?.value,
      review: null
    };
  }

  onPreview() {
    this.createProduct();
    this.state = 'preview';
  }

  onSubmit() {
    this.createProduct();
    this.addElementToList(this.newProduct);
    this.productForm.reset();

    if (this.stateFom === 'edit') {
      remove(refData(this.db, `list/${this.oldId - 1}`));
    }
  }

  addElementToList(obj: IProduct): void {
    set(refData(this.db, `list/${this.uniqId - 1}`), obj);
  }

  onEdit() {
    this.state = 'form';
  }

  @ViewChild('newColor') newColor: ElementRef;

  addCustomColor() {
    this.colorList.push(this.newColor.nativeElement.value);
    this.newColor.nativeElement.value = '';
  }
}
