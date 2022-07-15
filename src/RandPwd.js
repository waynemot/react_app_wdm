import React, { useState, Component } from 'react';
import PwdMeter from './PwdMeter';

class RandPwd extends Component {

        render() {
            
            
    
            return(
                <div>Randoms {}</div>
                
            );

    }

    gen(len = 8, upcase = false, num = false, spec = false, upany = false) {
        var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
        var vowels = ['a', 'e', 'i', 'o', 'u']
        var digits = {'l':1, 'e':3, 'o':0, 'b':6, 't':7, 'g':9, 'c':2, 'h':5, 'r':4, 'd':8};
        var specials = ['!','@','#','$','%','^','*', '&', '-', '+', '?', '=', '(', ')', '.', ',', '/', '<', '>', ';', ':'];
        var weights = [{'add_num' : 23},{'upcase_any' : 17},{'spec_char' : 18}];
    }
}

export default RandPwd;