import React, { Component } from 'react';
//import PwdMeter from './PwdMeter';
import {random} from 'core-js';
import App from './App';

const ResPane = React.forwardRef((props, ref) => {
    return <div ref={ref}>
      
    </div> 
  });
  
  
class RandPwd extends Component {

    render() {
        return(
            <div>Randoms {}</div>
        );

    }

    build_gen(count = 1, len = 8, num = false, spec = false, upany = false) {
        var pane = App.gen_result;
        var i = 0;
        var pwds = [];
        var pstr;
        while(i < count) {
            var xpwd = this.gen(len, num, spec, upany);
            console.log("xpwd: "+xpwd);
            pwds.push(xpwd);
            pstr = pstr + "<br/>" + xpwd;
            i += 1;
        }
        console.log("str: "+pstr);
        return(pstr)
    }

    gen(len = 8, num = false, spec = false, upany = false) {
        var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
        var vowels = ['a', 'e', 'i', 'o', 'u']
        var digits = {'l':1, 'e':3, 'o':0, 'b':6, 't':7, 'g':9, 'c':2, 'h':5, 'r':4, 'd':8};
        var specials = ['!','@','#','$','%','^','*', '&', '-', '+', '?', '=', '(', ')', '.', ',', '/', '<', '>', ';', ':'];
        var weights = [{'add_num' : 23},{'upcase_any' : 17},{'spec_char' : 18}];
        var cnt = 0;
        var output;
        var anycapped = false;
        var added_special = false;
        var added_num = false;
        while(cnt < len) {
            output += consonants[random(consonants.length - 1)]
            if(num && digits[output[output.length - 1]] && (random()*100) < weights['add_num']) {
                output[output.length - 1] = digits[output[output.length-1]];
                added_num = true;
            }
            else if (upany && (random(100) < weights['upcase_any'])) {
                output[output.length - 1] = output[output.length - 1].toUpperCase();
                anycapped = true;
            }
            output += vowels[random(vowels.length - 1)];
            if (upany && (random()*100) < weights['upcase_any']) {
                output[output.length - 1] = output[output.length - 1].toUpperCase();
            }
            if (num && (random()*100) < weights['add_num']) {
                output += digits[random(digits.length - 1)];
                cnt += 1;
            }
            if (spec && (random()*100) < weights['spec_char']) {
                output += specials[random(specials.length-1)];
                added_special = true;
                cnt += 1;
            }
            cnt += 1;
        }
        if(num && !added_num) {

        }
        if(upany && !anycapped) {

        }
        if(spec && !added_special) {

        }
        return(
            <div>

            </div>
        );
    }
}

export default RandPwd;