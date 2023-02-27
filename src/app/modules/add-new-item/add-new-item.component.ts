import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, DataFetchService } from '../main/data-fetch.service';

import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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

  constructor(private fb: FormBuilder, private fetch: DataFetchService) {}

  ngOnInit(): void {
    this.fetch.getNextId().subscribe((id) => {
      this.uniqId = id + 1;
    });
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

  private get discount() {
    return this.productForm.get('discount')?.value ? this.productForm.get('discount')?.value : null;
  }

  private get shipping() {
    return this.productForm.get('shipping')?.value ? this.productForm.get('shipping')?.value : null;
  }

  private get discountUntil() {
    return this.productForm.get('discountUntil')?.value
      ? this.productForm.get('discountUntil')?.value
      : null;
  }

  onLoadImg(event: any) {
    const file: File = event.files[0];
    this.addFileToBase(file);
  }

  addFileToBase(file: File) {
    const storage = getStorage();
    const storageRef = ref(storage, `bike-id:${this.uniqId}`);

    uploadBytes(storageRef, file).then((snapshot) => {
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
      discountUntil: this.discountUntil.toISOString().slice(0, -5),
      color: this.productForm.get('color')?.value,
      size: this.productForm.get('size')?.value,
      review: null,
    };
  }

  onPreview() {
    this.createProduct();
    this.state = 'preview';
  }

  onSubmit() {
    this.createProduct();
    this.fetch.addElementToList(this.newProduct);
    this.productForm.reset();
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
