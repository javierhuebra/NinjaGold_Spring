package com.codingdojo.ninjagold;

import java.time.LocalDateTime;
import java.util.Random;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/actions")
public class ControllerActionsNinjaGold {
    private int gold = 0;
    private GoldData informacion = new GoldData();

    @PostMapping("/granja")
    public GoldData granjaAction() {
        int goldEarned = getRandomRange(10, 20);
        LocalDateTime date = LocalDateTime.now();//Se instancia la fecha y hora local
        gold += goldEarned;

        //informacion = new GoldData(date, goldEarned, gold); Preguntar si crear un nuevo objeto con new o usar los setters para modificar la info

        informacion.setGoldExistente(gold);
        informacion.setGoldValue(goldEarned);
        informacion.setDate(date);

        //System.out.println("De granja va este dato:" + informacion);

        return informacion;
    }

    @PostMapping("/cueva")
    public GoldData cuevaAction(){
        int goldEarned = getRandomRange(5, 10);
        LocalDateTime date = LocalDateTime.now();//Se instancia la fecha y hora local
        gold += goldEarned;

        informacion.setGoldExistente(gold);
        informacion.setGoldValue(goldEarned);
        informacion.setDate(date);

        return informacion;
    }

    @PostMapping("/casa")
    public GoldData casaAction(){
        int goldEarned = getRandomRange(2, 5);
        LocalDateTime date = LocalDateTime.now();//Se instancia la fecha y hora local
        gold += goldEarned;

        informacion.setGoldExistente(gold);
        informacion.setGoldValue(goldEarned);
        informacion.setDate(date);

        return informacion;
    }

    @PostMapping("/casino")
    public GoldData casinoAction(){
        int goldEarned = getRandomRange(-50, 50);
        LocalDateTime date = LocalDateTime.now();//Se instancia la fecha y hora local
        gold += goldEarned;

        informacion.setGoldExistente(gold);
        informacion.setGoldValue(goldEarned);
        informacion.setDate(date);

        return informacion;
    }

    @PostMapping("/spa")
    public GoldData spaAction(){
        int goldEarned = getRandomRange(-20, -5);
        LocalDateTime date = LocalDateTime.now();//Se instancia la fecha y hora local
        gold += goldEarned;
        System.out.println(goldEarned);
        
        informacion.setGoldExistente(gold);
        informacion.setGoldValue(goldEarned);
        informacion.setDate(date);

        return informacion;
    }


    private int getRandomRange(int min, int max) {
        Random random = new Random();
        return random.nextInt((max - min) + 1) + min;
    }
}

