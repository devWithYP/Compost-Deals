import React from 'react'

function UpdateProduct() {
  return (
    <LayoutTwo>
       <div class="space-y-12 m-10">
         {/* <!-- Profile photo --> */}
    <div class="border-b border-gray-400 pb-12 ml-10 mr-10 mt-40">
      <h2 class="text-base font-semibold leading-7 text-gray-900">Fill Product details</h2>
      <p class="mt-1 text-sm leading-6 text-gray-900">This information will be displayed publicly so be careful what you share.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        {/* Upload Photo */}
        <div class="col-span-full">
          <label for="upload-photo" class="block text-sm font-medium leading-6 text-gray-900">Product photo</label>
          <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-400 px-6 py-10">
            <div class="text-center">
              <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div class="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-green focus-within:outline-none focus-within:ring-2 focus-within:ring-green focus-within:ring-offset-2 hover:text-lightGreen">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10 mx-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
     {/* Product Title */}
    <div class="col-span-full">
          <label for="product-title" class="block text-sm font-medium leading-6 text-gray-900">Product title</label>
          <div class="mt-2">
            <input type="text" name="product-title" id="product-title" autocomplete="product-title" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"/>
          </div>
    </div>

    {/* Product Description */}
    <div class="col-span-full">
          <label for="product-description" class="block text-sm font-medium leading-6 text-gray-900">Product discription</label>
          <div class="mt-2">
            <input type="text" name="product-description" id="product-description" autocomplete="product-description" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"/>
          </div>
    </div>

    {/* Category */}
    <div class="sm:col-span-2 sm:col-start-1">
          <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Compost Category/Type</label>
          <div class="mt-2">
            <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green sm:max-w-xs sm:text-sm sm:leading-6">
              <option>Vermiconpost</option>
              <option>Compost</option>
              <option>Leaf Compost</option>
              <option>Cow dung compost</option>
            </select>
          </div>
        </div>
        {/* Quantity */}
        <div class="sm:col-span-2">
          <label for="quantity" class="block text-sm font-medium leading-6 text-gray-900">Compost Quantity</label>
          <div class="mt-2">
            <select id="quantity" name="quantity" autocomplete="quantity-number" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-green sm:max-w-xs sm:text-sm sm:leading-6">
              <option>1kg</option>
              <option>2kg</option>
              <option>3kg</option>
              <option>4kg</option>
            </select>
          </div>
        </div>
        {/* price */}
        <div class="sm:col-span-2">
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <div class="mt-2">
            <input type="text" name="price" id="price" autocomplete="price" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green sm:text-sm sm:leading-6"/>
          </div>
        </div>

      </div>
      </div>
      <div class="mt-6 mr-20 flex items-center justify-end gap-x-6 mb-10">
         <button class="rounded-md bg-green px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lightGreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green">Update Product</button>
      </div>
    </LayoutTwo>
  )
}

export default UpdateProduct