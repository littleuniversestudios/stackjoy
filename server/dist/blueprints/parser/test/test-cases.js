"use strict";
/**
 NORMAL CASE
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestedCase = exports.mixedCase = exports.bluBlockCommentCase = exports.simpleEscapeCase = exports.simpleCommentCase = exports.normalCase = exports.simpleCase1 = exports.simpleCase3 = exports.simpleCase2 = exports.simpleCase = exports.emptyCase = void 0;
exports.emptyCase = `
    some text
    
    with no blu language expressions or tags
`;
exports.simpleCase = `
    [blu switch("22")]
    aa
        [blu switchCase=33]33[/blu]
        [blu switchCase="22"]
            [blu if(false)]true[/blu]
            [blu else]false[/blu]
        [/blu]
        [blu switchDefault]default[/blu]
    [/blu]
    `;
exports.simpleCase2 = `
    A,[blu]something
        [blu]nothing[/blu]
    [/blu],
    B
    `;
exports.simpleCase3 = `
    a
    ->^^titleCase(negate(true):negate)^^<-
    ^^!->^^timesTwo(false)^^<-!^^
    ^^!->^^paramCase("my.name"):pascalCase^^<-!^^
    ^^!->^^name:titleCase^^<-!^^
    ->
    [blu forEach(item in names)]
      ^^index^^) ^^item^^: ([blu forEach(item2 in names)]^^item2^^ aa, [/blu])
    [/blu]
    b
`;
exports.simpleCase1 = `
    a
    ^^!->^^negate(null)^^<-!^^
    ^^!->^^timesTwo(false)^^<-!^^
    ^^!->^^paramCase("my.name"):pascalCase^^<-!^^
    ^^!->^^name:titleCase^^<-!^^
    b
    ->[blu if(true)]
    [blu forEach(item in names) if(false)] 
    ^^index^^) ^^item^^,[blu forEach(item2 in names):j=index]
         ^^j^^) ^^item^^ - ^^item2^^[/blu][/blu]
         [/blu]
`;
exports.normalCase = `
    some text
    
    ^^expr:pascalCase^^
    
    [blu]
        blu tag
    [/blu]
    
    end text
`;
exports.simpleCommentCase = `>
    some text
    
    ->^^! blu ^^ [blu] [/blu] comment !^^<-
    
    another
    
    ->^^! blu ^^ 
    
    comment 
    
    !^^<-
    
    end text
<`;
exports.simpleEscapeCase = `
    some text
    
    ^^~ blu escape ^^ [blu] 
    
    [/blu] soemthing else ~^^
    
    ^^! whaaa???? !^^
    
    middle
    ->^^aa:upperCase^^^^bb:uppercase^^<-
    
    ^^~  ^^ [blu] [/blu] soemthing else ~^^
    
    end text
    ^^gg:lowerCase^^
`;
exports.bluBlockCommentCase = `
    some text
    
    ^^! blu comment with blu block [blu] [/blu] !^^
    
    end text
`;
exports.mixedCase = `
    some text
        
        ^^expr:pascalCase^^
        ^^~ comment ~^^
        [blu if(5<15)]
            blu tag
            ^^expr2:lowerCase^^
            [blu forEach(g in props)]
                ^^index^^.)^^g:f^^
            [/blu]
        [/blu]
        
        
        end text
`;
exports.nestedCase = `
    some text
        
        ^^expr:pascalCase^^
        ^^~ comment ~^^
        [blu]
            blu tag1
            ^^expr2:lowerCase^^
            
            [blu]
                blu tag 2
                ^^expr3:upperCase^^
                
                end text block 2
            [/blu]
            
            end text block 1
        [/blu]
        
        end text
`;
//# sourceMappingURL=test-cases.js.map