import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct, DataFetchService } from '../main/data-fetch.service';



@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.sass']
})
export class AddNewItemComponent implements OnInit {
  productForm: FormGroup;
  state = 'form'
  colorList = ['Blue', 'Grey', 'Orange', 'Black'];
  sizeList = ['S', 'L', 'XL', 'XXL'];
  imageData: any;
  newProduct: IProduct;
  id: any;

  constructor(private fb: FormBuilder, private fetch:DataFetchService) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      imgBase64: ['', Validators.required],
      price: ['', Validators.required],
      main: [false],
      shop: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      shipping: [''],
      discount: ['',Validators.required],
      discountUntil: ['',Validators.required],
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
  onLoadImg(event:any){
    const file: File = event.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.productForm.get('imgBase64')!.setValue(e.target.result)
    };
    reader.readAsDataURL(file);
  }

  createProduct(){
    this.newProduct = {
      id: 0,
      name: this.productForm.get('name')?.value,
      imgUrl: this.productForm.get('imgBase64')?.value,
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
  }

  onPreview(){
    this.createProduct()
    this.state='preview'

    this.fetch.getUniqId().subscribe(response=>{
      this.newProduct.id = response      
    })
  }

  onSubmit() {
    this.createProduct()
    this.fetch.dataList.push(this.newProduct)
    this.productForm.reset()
  }

  onEdit(){
    this.state='form'
  }

  @ViewChild('newColor') newColor: ElementRef;

  addCustomColor() {
    
    this.colorList.push(this.newColor.nativeElement.value);
    this.newColor.nativeElement.value = '';
  }
}
