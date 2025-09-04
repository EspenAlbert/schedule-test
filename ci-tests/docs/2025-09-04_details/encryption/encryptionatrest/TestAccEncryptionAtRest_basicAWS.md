# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 40 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 36) FAIL(x 4)
Success rate: 90.00%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-08-09 00:28](#error-2025-08-09t0028510000) |  | dev | 0.04s
[2025-08-11 00:32](#error-2025-08-11t0032310000) |  | dev | 0.06s
[2025-08-28 00:27](#error-2025-08-28t0027380000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev | 0.04s
[2025-08-29 00:27](#error-2025-08-29t0027580000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest | dev | 0.06s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 4 seconds
- 2025-08-07 PASS a minute
- 2025-08-08 PASS 4 seconds
- 2025-08-09

### Error 2025-08-09T00:28:51+00:00
```
2025-08-09T00:28:51.0696146Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-08-09T00:28:51.0711088Z    test_working_directory=/tmp/plugintest1911999584 test_step_number=1 test_name=TestAccEncryptionAtRest_basicAWS
2025-08-09T00:28:51.0711814Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-08-09T00:28:51.0712198Z         
2025-08-09T00:28:51.0712638Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-09T00:28:51.0713013Z         
2025-08-09T00:28:51.0713377Z           with mongodbatlas_encryption_at_rest.test,
2025-08-09T00:28:51.0714076Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-09T00:28:51.0714727Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-09T00:28:51.0715321Z         
2025-08-09T00:28:51.0716358Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-09T00:28:51.0717034Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-09T00:28:51.0717707Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-09T00:28:51.0718453Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-09T00:28:51.0719123Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-09T00:28:51.0719750Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-09T00:28:51.0720191Z         BadRequestDetail: 
2025-08-09T00:28:51.0720646Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.45s)
```

- 2025-08-10 PASS 6 seconds
- 2025-08-11

### Error 2025-08-11T00:32:31+00:00
```
2025-08-11T00:32:31.3420404Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-08-11T00:32:31.3434884Z    test_working_directory=/tmp/plugintest1940537720 test_step_number=1 test_name=TestAccEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/9e5ed541-4f77-4736-8b2c-34baf3ab72c1/terraform
2025-08-11T00:32:31.3435905Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-08-11T00:32:31.3436294Z         
2025-08-11T00:32:31.3436726Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-11T00:32:31.3437099Z         
2025-08-11T00:32:31.3437457Z           with mongodbatlas_encryption_at_rest.test,
2025-08-11T00:32:31.3438135Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-11T00:32:31.3438774Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-11T00:32:31.3439111Z         
2025-08-11T00:32:31.3439691Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-11T00:32:31.3440291Z         PATCH: HTTP 400 Bad Request (Error code:
2025-08-11T00:32:31.3440946Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-08-11T00:32:31.3441692Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-08-11T00:32:31.3442349Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-08-11T00:32:31.3442978Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-08-11T00:32:31.3443567Z         BadRequestDetail: 
2025-08-11T00:32:31.3444022Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.55s)
```

- 2025-08-12 PASS 5 seconds
- 2025-08-13 PASS 4 seconds
- 2025-08-14 PASS 8 seconds
- 2025-08-15 PASS 4 seconds
- 2025-08-16 PASS 8 seconds
- 2025-08-17 PASS 3 seconds
- 2025-08-18 PASS 7 seconds
- 2025-08-19 PASS 3 seconds
- 2025-08-20
  - PASS 4 seconds
  - PASS 7 seconds
- 2025-08-21 PASS 4 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 6 seconds
- 2025-08-24 PASS 3 seconds
- 2025-08-25 PASS 7 seconds
- 2025-08-26 PASS 7 seconds
- 2025-08-27 PASS 6 seconds
- 2025-08-28

### Error 2025-08-28T00:27:38+00:00
```
2025-08-28T00:27:38.3405562Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-08-28T00:27:38.3418707Z    test_working_directory=/tmp/plugintest1418863032
2025-08-28T00:27:38.3419239Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-08-28T00:27:38.3419620Z         
2025-08-28T00:27:38.3420072Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-28T00:27:38.3420454Z         
2025-08-28T00:27:38.3420829Z           with mongodbatlas_encryption_at_rest.test,
2025-08-28T00:27:38.3421527Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-28T00:27:38.3422185Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-28T00:27:38.3422521Z         
2025-08-28T00:27:38.3423119Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-28T00:27:38.3423879Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-28T00:27:38.3424532Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-28T00:27:38.3425136Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-28T00:27:38.3425560Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.42s)
```

- 2025-08-29
  - FAIL a moment

### Error 2025-08-29T00:27:58+00:00
```
2025-08-29T00:27:58.7840915Z === RUN   TestAccEncryptionAtRest_basicAWS
2025-08-29T00:27:58.7853815Z   
2025-08-29T00:27:58.7854205Z     resource_test.go:53: Step 1/4 error: Error running apply: exit status 1
2025-08-29T00:27:58.7854578Z         
2025-08-29T00:27:58.7854997Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-08-29T00:27:58.7855364Z         
2025-08-29T00:27:58.7855718Z           with mongodbatlas_encryption_at_rest.test,
2025-08-29T00:27:58.7856387Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_encryption_at_rest" "test":
2025-08-29T00:27:58.7857011Z           12: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-08-29T00:27:58.7857619Z         
2025-08-29T00:27:58.7858205Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-08-29T00:27:58.7858922Z         PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-08-29T00:27:58.7859548Z         cannot assume the specified role (679243c15ec3be271d1d7952). Reason: Bad
2025-08-29T00:27:58.7860131Z         Request. Params: [679243c15ec3be271d1d7952], BadRequestDetail: 
2025-08-29T00:27:58.7860549Z --- FAIL: TestAccEncryptionAtRest_basicAWS (0.58s)
```

  - PASS 4 seconds
  - PASS 9 seconds
- 2025-08-30 PASS 4 seconds
- 2025-08-31 PASS 5 seconds
- 2025-09-01
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 4 seconds
  - PASS 7 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 8 seconds
- 2025-09-02 PASS 5 seconds
- 2025-09-03 PASS 4 seconds
- 2025-09-04 PASS 4 seconds