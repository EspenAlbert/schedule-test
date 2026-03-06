# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 26) FAIL(x 7)
Success rate: 78.79%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-05 01:36](#error-2026-02-05t0136250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6983e69cb0f8d5bab818fc2a/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 7.05s
[2026-02-16 00:47](#error-2026-02-16t0047490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6992674160ee1ae24ac980ab/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 4.04s
[2026-02-19 00:45](#error-2026-02-19t0045430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69965bcb99696b9761bc5980/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 10.05s
[2026-02-21 00:42](#error-2026-02-21t0042440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6998fe2623648dd3abd53dab/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 8.03s
[2026-02-24 00:45](#error-2026-02-24t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/699cf2a7ae2412ce621194ad/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 8.07s
[2026-02-26 00:42](#error-2026-02-26t0042340000) | UNEXPECTED_ERROR /api/atlas/v2/groups/699f95996ef93d0b6c18c391/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 9.00s
[2026-03-04 00:44](#error-2026-03-04t0044300000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69a77ee6a0aca1fefeeb78fa/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 4.07s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05

### Error 2026-02-05T01:36:25+00:00
```
2026-02-05T01:36:25.7903309Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-05T01:36:25.7904629Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-1440714704224061110
2026-02-05T01:36:25.7919959Z   
2026-02-05T01:36:25.7920399Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-05T01:36:25.7920833Z         
2026-02-05T01:36:25.7921140Z         Error: error creating resource
2026-02-05T01:36:25.7921444Z         
2026-02-05T01:36:25.7921907Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-05T01:36:25.7922803Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-05T01:36:25.7923660Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-05T01:36:25.7924112Z         
2026-02-05T01:36:25.7924886Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6983e69cb0f8d5bab818fc2a/encryptionAtRest/AZURE/privateEndpoints
2026-02-05T01:36:25.7926017Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-05T01:36:25.7926666Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-05T01:36:25.7927108Z         BadRequestDetail: 
2026-02-05T01:36:25.7927511Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (7.55s)
```

- 2026-02-06 PASS 3 minutes
- 2026-02-07 PASS 3 minutes
- 2026-02-08: MISSING
- 2026-02-09 PASS 3 minutes
- 2026-02-10 PASS 3 minutes
- 2026-02-11 PASS 3 minutes
- 2026-02-12 PASS 3 minutes
- 2026-02-13 PASS 3 minutes
- 2026-02-14 PASS 3 minutes
- 2026-02-15: MISSING
- 2026-02-16

### Error 2026-02-16T00:47:49+00:00
```
2026-02-16T00:47:49.0549381Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-16T00:47:49.0566510Z   
2026-02-16T00:47:49.0569052Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-16T00:47:49.0569730Z         
2026-02-16T00:47:49.0570322Z         Error: error creating resource
2026-02-16T00:47:49.0570818Z         
2026-02-16T00:47:49.0571787Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-16T00:47:49.0573342Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-16T00:47:49.0574934Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-16T00:47:49.0575654Z         
2026-02-16T00:47:49.0576428Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6992674160ee1ae24ac980ab/encryptionAtRest/AZURE/privateEndpoints
2026-02-16T00:47:49.0577336Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-16T00:47:49.0577991Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-16T00:47:49.0578442Z         BadRequestDetail: 
2026-02-16T00:47:49.0578853Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (4.43s)
```

- 2026-02-17 PASS 3 minutes
- 2026-02-18 PASS 3 minutes
- 2026-02-19

### Error 2026-02-19T00:45:43+00:00
```
2026-02-19T00:45:43.8271824Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-19T00:45:43.8273069Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-5160367385048835966
2026-02-19T00:45:43.8291670Z    test_working_directory=/tmp/plugintest2495717555 test_step_number=2 test_terraform_path=/home/runner/work/_temp/aa8cbe09-3961-41d2-9a27-42d55ded5020/terraform
2026-02-19T00:45:43.8292598Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-19T00:45:43.8293014Z         
2026-02-19T00:45:43.8293321Z         Error: error creating resource
2026-02-19T00:45:43.8293628Z         
2026-02-19T00:45:43.8294402Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-19T00:45:43.8295286Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-19T00:45:43.8296125Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-19T00:45:43.8296586Z         
2026-02-19T00:45:43.8297323Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69965bcb99696b9761bc5980/encryptionAtRest/AZURE/privateEndpoints
2026-02-19T00:45:43.8298196Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-19T00:45:43.8298828Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-19T00:45:43.8299264Z         BadRequestDetail: 
2026-02-19T00:45:43.8299672Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (10.55s)
```

- 2026-02-20 PASS 3 minutes
- 2026-02-21

### Error 2026-02-21T00:42:44+00:00
```
2026-02-21T00:42:44.3002688Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-21T00:42:44.3003712Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-2068507674738170757
2026-02-21T00:42:44.3020120Z    test_working_directory=/tmp/plugintest381585710
2026-02-21T00:42:44.3020668Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-21T00:42:44.3021079Z         
2026-02-21T00:42:44.3021378Z         Error: error creating resource
2026-02-21T00:42:44.3021673Z         
2026-02-21T00:42:44.3022119Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-21T00:42:44.3022969Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-21T00:42:44.3023796Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-21T00:42:44.3024210Z         
2026-02-21T00:42:44.3024935Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6998fe2623648dd3abd53dab/encryptionAtRest/AZURE/privateEndpoints
2026-02-21T00:42:44.3025782Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-21T00:42:44.3026404Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-21T00:42:44.3026837Z         BadRequestDetail: 
2026-02-21T00:42:44.3027233Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (8.25s)
```

- 2026-02-22: MISSING
- 2026-02-23 PASS 3 minutes
- 2026-02-24

### Error 2026-02-24T00:45:54+00:00
```
2026-02-24T00:45:54.2887450Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-24T00:45:54.2888774Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-7156276447352915819
2026-02-24T00:45:54.2914602Z   
2026-02-24T00:45:54.2915358Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-24T00:45:54.2916092Z         
2026-02-24T00:45:54.2916625Z         Error: error creating resource
2026-02-24T00:45:54.2917151Z         
2026-02-24T00:45:54.2918150Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-24T00:45:54.2919812Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-24T00:45:54.2921412Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-24T00:45:54.2922191Z         
2026-02-24T00:45:54.2923586Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699cf2a7ae2412ce621194ad/encryptionAtRest/AZURE/privateEndpoints
2026-02-24T00:45:54.2925237Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-24T00:45:54.2926417Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-24T00:45:54.2927208Z         BadRequestDetail: 
2026-02-24T00:45:54.2928118Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (8.66s)
```

- 2026-02-25 PASS 3 minutes
- 2026-02-26

### Error 2026-02-26T00:42:34+00:00
```
2026-02-26T00:42:34.0813581Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-26T00:42:34.0814884Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-6899379275573137348
2026-02-26T00:42:34.0837511Z   
2026-02-26T00:42:34.0837941Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-26T00:42:34.0838346Z         
2026-02-26T00:42:34.0838651Z         Error: error creating resource
2026-02-26T00:42:34.0838950Z         
2026-02-26T00:42:34.0839397Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-26T00:42:34.0840249Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-26T00:42:34.0841071Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-26T00:42:34.0841498Z         
2026-02-26T00:42:34.0842224Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f95996ef93d0b6c18c391/encryptionAtRest/AZURE/privateEndpoints
2026-02-26T00:42:34.0843109Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-26T00:42:34.0843738Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-26T00:42:34.0844173Z         BadRequestDetail: 
2026-02-26T00:42:34.0844573Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (9.03s)
```

- 2026-02-27 PASS 4 minutes
- 2026-02-28 PASS 3 minutes
- 2026-03-01: MISSING
- 2026-03-02 PASS 3 minutes
- 2026-03-03 PASS 3 minutes
- 2026-03-04

### Error 2026-03-04T00:44:30+00:00
```
2026-03-04T00:44:30.2540969Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-03-04T00:44:30.2556640Z   
2026-03-04T00:44:30.2557394Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-03-04T00:44:30.2558147Z         
2026-03-04T00:44:30.2558704Z         Error: error creating resource
2026-03-04T00:44:30.2559250Z         
2026-03-04T00:44:30.2560117Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-03-04T00:44:30.2561774Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-03-04T00:44:30.2562645Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-03-04T00:44:30.2563076Z         
2026-03-04T00:44:30.2564081Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77ee6a0aca1fefeeb78fa/encryptionAtRest/AZURE/privateEndpoints
2026-03-04T00:44:30.2564977Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-03-04T00:44:30.2565618Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-03-04T00:44:30.2566060Z         BadRequestDetail: 
2026-03-04T00:44:30.2566470Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (4.65s)
```

- 2026-03-05 PASS 4 minutes
- 2026-03-06 PASS 4 minutes

## QA Environment
### Timeline
- 2026-02-04 PASS 3 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 3 minutes
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 3 minutes
- 2026-02-16: MISSING
- 2026-02-17 PASS 3 minutes
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 3 minutes
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 3 minutes
- 2026-03-02: MISSING
- 2026-03-03 PASS 3 minutes
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
