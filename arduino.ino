#incluide <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT11

DHT dht (DHTPIN, DHTTYPE);

void setup() {
    Serial.bing(9600)
    dht.begin();
}
void loop() {
    float h = dht.readHmidity();
    float t = dht.readTemperature();

    if (!isnan(h) && ! isnan(t)){
        Serial.print("{\"temparatura\":")
        Serial.print(t)
        Serial.print(",\"umidade\":")
        Serial.print(h)
        Serial.println ("}");
    } else {
         Serial.println("{\"erro\": true}");
    }
    delay(2000);
        
}

