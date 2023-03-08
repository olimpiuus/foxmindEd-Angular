import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, DataFetchService } from 'src/app/services/data-fetch.service';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, set, ref as refData } from 'firebase/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './edit-add-new-item.component.html',
  styleUrls: ['./edit-add-new-item.component.sass']
})
export class EditAddNewItemComponent implements OnInit {
  productForm: FormGroup;
  state = 'form';
  colorList = ['Blue', 'Grey', 'Orange', 'Black'];
  sizeList = ['S', 'L', 'XL', 'XXL'];
  imageData: any;
  product: IProduct;
  id: any;
  uniqId: number;
  route = this._router.url;
  stateFom = 'new';
  oldId: number;
  db = getDatabase();

  constructor(private fb: FormBuilder, private fetch: DataFetchService, private _router: Router) {}

  ngOnInit(): void {
    this.initFormGroup();
    if (this.route.includes('edit')) {
      this.initEditingElement();
    } else {
      this.getUniqId();
    }
  }

  initFormGroup() {
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
  }

  initEditingElement() {
    this.oldId = parseInt(this.route.split('/')[2]);
    this.fetch.getProductById(this.oldId).subscribe((x) => {
      this.product = x!;
      this.updateFormForEditingBike();
      this.stateFom = 'edit';
    });
  }

  updateFormForEditingBike() {
    this.productForm.patchValue({
      id: this.oldId,
      imgUrl: this.product.imgUrl,
      price: this.product.price,
      main: this.product.main,
      shop: this.product.shop,
      name: this.product.name,
      description: this.product.description,
      shipping: this.product.shipping,
      discount: this.product.discount,
      discountUntil: this.product.discountUntil,
      new: this.product.new,
      color: this.product.color,
      size: this.product.size
    });
  }

  getUniqId() {
    return Math.floor(Math.random() * 1000000 + 1);
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

  public get btnSubmitText() {
    return this.stateFom === 'new' ? 'Add new item' : 'Save';
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
    this.product = {
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

  saveProduct() {
    this.product = {
      id: this.oldId,
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
      review: this.product.review
    };
  }

  onPreview() {
    this.createProduct();
    this.state = 'preview';
  }

  onSubmit() {
    if (this.stateFom === 'new') {
      this.createProduct();
    }

    if (this.stateFom === 'edit') {
      this.saveProduct();
    }

    this.addElementToList(this.product);
    this.productForm.reset();
  }

  addElementToList(obj: IProduct): void {
    set(refData(this.db, `list/${this.product.id - 1}`), obj);
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
