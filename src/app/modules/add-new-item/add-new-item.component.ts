import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../main/data-fetch.service';



@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.sass']
})
export class AddNewItemComponent implements OnInit {
  productForm: FormGroup;

  colorList = ['Blue', 'Grey', 'Orange', 'Black'];
  sizeList = ['S', 'L', 'XL', 'XXL'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      // imgUrl: ['', Validators.required],
      price: ['', Validators.required],
      main: [false],
      shop: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      shipping: [''],
      discount: [''],
      discountUntil: [''],
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
  send(){
    console.log('send');
    
  }
  onSubmit() {
    console.log(this.productForm.value);
    const newProduct: IProduct = {
      id: 0,
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
      review: []
    };
    console.log(newProduct);
    this.productForm.reset();
  }

  @ViewChild('newColor') newColor: ElementRef;

  addCustomColor() {
    this.colorList.push(this.newColor.nativeElement.value);
    this.newColor.nativeElement.value = '';
  }
}
