var suma=0,aux=1;
function suma_fraccion(n)
{
    for(var i=1; i<=n; i++)
    {
        for(var j=2; j<=n; j++)
        suma+=(i/j);
        aux+=2;
    } 
    return suma;
}

var n=2;
console.log(suma_fraccion(n));
