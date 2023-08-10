#include <iostream>

using namespace std;

void selectionSort(int arr[],int n){
    for (int i = 0; i < n-1; i++)
    {
        int lowest=i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[lowest]) {
                lowest=j;
                swap(arr[lowest],arr[i]);
            }
        }
    }
    
}


void print(int arr[],int size){
    for (int i = 0; i < size; i++)
    {
        cout <<arr[i]<<" ";
        cout << endl;
    }
    
}

int main(){ 
    int arr[]={60,40,50,30,10,20};
    int n=sizeof(arr)/sizeof(arr[0]);//6*4=24/4
    selectionSort(arr,n);
    cout <<"Array After Selection Sort:/n";
    print(arr,n);
    return 0;

}