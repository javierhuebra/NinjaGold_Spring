package com.codingdojo.ninjagold;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class GoldData {
    private String dateHour;
    private int goldValue;
    private int goldExistente;

    public GoldData(){
        
    }
    public GoldData(LocalDateTime date, int goldValue, int goldExistente) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");//Instancio un formateador que me transforma en cadena
        
        this.dateHour = date.format(formatter);//Aca datehour ya es una cadena de texto
        this.goldValue = goldValue;
        this.goldExistente = goldExistente;
    }

    public String getDate() {
        return dateHour;
    }

    public int getGoldValue() {
        return goldValue;
    }

    public int getGoldExistente() {
        return goldExistente;
    }

    public void setGoldValue(int goldValue) {
        this.goldValue = goldValue;
    }

    public void setGoldExistente(int goldExistente) {
        this.goldExistente = goldExistente;
    }

    public void setDate(LocalDateTime date){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy HH:mm:ss");
        this.dateHour = date.format(formatter);
    }
}

