def palindromo(X):
    def expandir_ao_redor_do_centro(X, esquerda, direita):
        while esquerda >= 0 and direita < len(X) and X[esquerda] == X[direita]:
            esquerda -= 1  
            direita += 1    
        return X[esquerda + 1:direita]
    
    mais_longa = ""
    
    for i in range(len(X)):
        palindromo_impar = expandir_ao_redor_do_centro(X, i, i)
        palindromo_par = expandir_ao_redor_do_centro(X, i, i + 1)
        mais_longa = max(mais_longa, palindromo_impar, palindromo_par, key=len)
    
    return mais_longa
