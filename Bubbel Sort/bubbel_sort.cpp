#include <iostream>
using namespace std;

void bubbelSort(int arr[],int n){
    bool noSwaps;
    for(int i=n-1;i>0;i--){
        noSwaps=true;
        for(int j=0;j<i-1;j++){

            if(arr[j]>arr[j+1]){
                swap(arr[j],arr[j+1]);
                noSwaps=false;
            }
        }
        if(noSwaps) break;

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
    int arr[]={8, 1, 2, 3, 4, 5, 6, 7};
    int n =sizeof(arr)/sizeof(arr[0]);
    bubbelSort(arr,n);
    cout <<"Array After bubbel sort:";
    print(arr,n);
    return 0;
}