package com.codingdojo.ninjagold;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ControllerNinjaGold {
    
    @RequestMapping("/")
    public String renderGold(){
        return "ninja_gold/gold";
    }
}
