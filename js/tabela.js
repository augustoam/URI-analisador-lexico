function linhas() {
    for (var a = [], i = 0; i < estados.length; i++) {
        var e = [];
        e.estado = i;
        for (var codeAZ = "a".charCodeAt(0); codeAZ <= "z".charCodeAt(0); codeAZ++) {
            var palavraAZ = String.fromCharCode(codeAZ);
            if (typeof estados[i][palavraAZ] === 'undefined') {
                e[palavraAZ] = "-";
            } else {
                e[palavraAZ] = estados[i][palavraAZ];
            }
        }
        void 0 !== estados[i].estado_final && (e.estado_final = !0), a.push(e)
    }
    return a
}

function insereTabela() {
    for (var a = 0; a < colecaoPalavras.length; a++)
        for (var t, e = 0, o = colecaoPalavras[a], r = 0; r < o.length; r++) {
            if (typeof estados[e][o[r]] === 'undefined') {
                t = geral + 1;
                estados[e][o[r]] = t;
                estados[t] = [];
                geral = e = t;
            } else {
                e = estados[e][o[r]];
                r == o.length - 1 && (estados[e].estado_final = !0);
            }
        }
}

function montaTabela(a) {
    tabela = $("#tabela"), tabela.html("");
    var t = $("<tr class=''>"),
        header = $("<th>");
    header.html("-"), t.append(header);
    for (var o = "a", r = "z", d = o.charCodeAt(0); d <= r.charCodeAt(0); d++)(e = $("<th>")).html(String.fromCharCode(d)), t.append(e);
    tabela.append(t);
    for (var s = 0; s < a.length; s++) {
        var t = $("<tr class='trestado'>"),
            l = $("<td>");
        a[s].final ? l.html("q" + a[s].estado + "*") : l.html("q" + a[s].estado), t.append(l), t.addClass("estado_" + a[s].estado);
        for (var r = "z", d = (o = "a").charCodeAt(0); d <= r.charCodeAt(0); d++) {
            var n = String.fromCharCode(d);
            (l = $("<td>")).addClass("caracter_" + n), "-" != a[s][n] && l.html("q" + a[s][n]), t.append(l)
        }
        tabela.append(t)
    }
}

var estados = [[]], geral = 0;
