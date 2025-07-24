# encryption/encryptionatrest/TestMigEncryptionAtRest_basicAWS Test Details
# Found 39 TestRuns in dev, qa from 2025-06-25 to 2025-07-24 from master branch: 1 unique tests, PASS(x 31) FAIL(x 8)
Success rate: 79.49%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-07-15 00:30](#error-2025-07-15t0030210000) |  | dev | 2.05s
[2025-07-16 00:30](#error-2025-07-16t0030020000) |  | dev | 2.04s
[2025-07-17 00:30](#error-2025-07-17t0030350000) |  | dev | 2.02s
[2025-07-18 00:30](#error-2025-07-18t0030110000) |  | dev | 2.05s
[2025-07-19 00:29](#error-2025-07-19t0029240000) |  | dev | 2.07s
[2025-07-21 00:32](#error-2025-07-21t0032470000) |  | dev | 2.00s
[2025-07-23 14:03](#error-2025-07-23t1403040000) |  | dev | 2.04s
[2025-07-24 00:31](#error-2025-07-24t0031040000) |  | dev | 2.01s

## Timeline
- 2025-06-24: MISSING
- 2025-06-25 PASS 6 seconds
- 2025-06-26 PASS 5 seconds
- 2025-06-27 PASS 5 seconds
- 2025-06-28 PASS 8 seconds
- 2025-06-29 PASS 8 seconds
- 2025-06-30 PASS 9 seconds
- 2025-07-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 8 seconds
  - PASS 8 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 6 seconds
- 2025-07-03 PASS 5 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 5 seconds
- 2025-07-06 PASS 5 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 5 seconds
- 2025-07-09 PASS 8 seconds
- 2025-07-10
  - PASS 5 seconds
  - PASS 7 seconds
- 2025-07-11 PASS 6 seconds
- 2025-07-12 PASS 5 seconds
- 2025-07-13 PASS 6 seconds
- 2025-07-14 PASS 5 seconds
- 2025-07-15

### Error 2025-07-15T00:30:21+00:00
```
2025-07-15T00:30:21.0602308Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-15T00:30:21.0617773Z   
2025-07-15T00:30:21.0618681Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-15T00:30:21.0620327Z         
2025-07-15T00:30:21.0621114Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-15T00:30:21.0621758Z         
2025-07-15T00:30:21.0622401Z           with mongodbatlas_encryption_at_rest.test,
2025-07-15T00:30:21.0623596Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-15T00:30:21.0624755Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-15T00:30:21.0625362Z         
2025-07-15T00:30:21.0626379Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-15T00:30:21.0627416Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-15T00:30:21.0628618Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-15T00:30:21.0629662Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-15T00:30:21.0630350Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-15T00:30:21.0630982Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-15T00:30:21.0631483Z         BadRequestDetail: 
2025-07-15T00:30:21.0631821Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.52s)
```

- 2025-07-16

### Error 2025-07-16T00:30:02+00:00
```
2025-07-16T00:30:02.6211315Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-16T00:30:02.6227891Z   
2025-07-16T00:30:02.6228583Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-16T00:30:02.6229141Z         
2025-07-16T00:30:02.6229736Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-16T00:30:02.6230279Z         
2025-07-16T00:30:02.6230757Z           with mongodbatlas_encryption_at_rest.test,
2025-07-16T00:30:02.6231556Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-16T00:30:02.6232308Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-16T00:30:02.6232660Z         
2025-07-16T00:30:02.6233356Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-16T00:30:02.6234061Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-16T00:30:02.6234829Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-16T00:30:02.6235684Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-16T00:30:02.6236466Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-16T00:30:02.6237219Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-16T00:30:02.6237674Z         BadRequestDetail: 
2025-07-16T00:30:02.6238113Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.40s)
```

- 2025-07-17

### Error 2025-07-17T00:30:35+00:00
```
2025-07-17T00:30:35.5997080Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-17T00:30:35.6015984Z   
2025-07-17T00:30:35.6016555Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-17T00:30:35.6017270Z         
2025-07-17T00:30:35.6018088Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-17T00:30:35.6018746Z         
2025-07-17T00:30:35.6019392Z           with mongodbatlas_encryption_at_rest.test,
2025-07-17T00:30:35.6020636Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-17T00:30:35.6021390Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-17T00:30:35.6021841Z         
2025-07-17T00:30:35.6022540Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-17T00:30:35.6023258Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-17T00:30:35.6024031Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-17T00:30:35.6024882Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-17T00:30:35.6025671Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-17T00:30:35.6026393Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-17T00:30:35.6027032Z         BadRequestDetail: 
2025-07-17T00:30:35.6027423Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.23s)
```

- 2025-07-18

### Error 2025-07-18T00:30:11+00:00
```
2025-07-18T00:30:11.1952161Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-18T00:30:11.1967322Z    test_name=TestMigEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/613949e7-b3b4-4a83-bdbb-8a489b91e39a/terraform test_working_directory=/tmp/plugintest2227301239
2025-07-18T00:30:11.1969314Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-18T00:30:11.1969754Z         
2025-07-18T00:30:11.1970541Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-18T00:30:11.1971197Z         
2025-07-18T00:30:11.1971859Z           with mongodbatlas_encryption_at_rest.test,
2025-07-18T00:30:11.1973087Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-18T00:30:11.1974227Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-18T00:30:11.1974825Z         
2025-07-18T00:30:11.1975518Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-18T00:30:11.1976593Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-18T00:30:11.1977768Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-18T00:30:11.1979220Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-18T00:30:11.1980393Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-18T00:30:11.1981133Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-18T00:30:11.1981915Z         BadRequestDetail: 
2025-07-18T00:30:11.1982495Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.53s)
```

- 2025-07-19

### Error 2025-07-19T00:29:24+00:00
```
2025-07-19T00:29:24.4821328Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-19T00:29:24.4839057Z   
2025-07-19T00:29:24.4839924Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-19T00:29:24.4840906Z         
2025-07-19T00:29:24.4841740Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-19T00:29:24.4842411Z         
2025-07-19T00:29:24.4843051Z           with mongodbatlas_encryption_at_rest.test,
2025-07-19T00:29:24.4844295Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-19T00:29:24.4845452Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-19T00:29:24.4846088Z         
2025-07-19T00:29:24.4847163Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-19T00:29:24.4848222Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-19T00:29:24.4849408Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-19T00:29:24.4851102Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-19T00:29:24.4852351Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-19T00:29:24.4853552Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-19T00:29:24.4854382Z         BadRequestDetail: 
2025-07-19T00:29:24.4854960Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.69s)
```

- 2025-07-20 PASS 8 seconds
- 2025-07-21
  - FAIL 2 seconds

### Error 2025-07-21T00:32:47+00:00
```
2025-07-21T00:32:47.0653943Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-21T00:32:47.0667674Z    test_name=TestMigEncryptionAtRest_basicAWS test_terraform_path=/home/runner/work/_temp/5340e9ef-531b-4ca6-a5fd-cbdff69ad5ec/terraform
2025-07-21T00:32:47.0668556Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-21T00:32:47.0668988Z         
2025-07-21T00:32:47.0669429Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-21T00:32:47.0669816Z         
2025-07-21T00:32:47.0670188Z           with mongodbatlas_encryption_at_rest.test,
2025-07-21T00:32:47.0670882Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-21T00:32:47.0671522Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-21T00:32:47.0671869Z         
2025-07-21T00:32:47.0672452Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-21T00:32:47.0673054Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-21T00:32:47.0673712Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-21T00:32:47.0674454Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-21T00:32:47.0675119Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-21T00:32:47.0675765Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-21T00:32:47.0676220Z         BadRequestDetail: 
2025-07-21T00:32:47.0676763Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.05s)
```

  - PASS 6 seconds
- 2025-07-22 PASS 5 seconds
- 2025-07-23
  - PASS 5 seconds
  - PASS 5 seconds
  - FAIL 2 seconds

### Error 2025-07-23T14:03:04+00:00
```
2025-07-23T14:03:04.5435776Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-23T14:03:04.5448040Z   
2025-07-23T14:03:04.5448590Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-23T14:03:04.5449021Z         
2025-07-23T14:03:04.5449463Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-23T14:03:04.5449836Z         
2025-07-23T14:03:04.5450191Z           with mongodbatlas_encryption_at_rest.test,
2025-07-23T14:03:04.5452915Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-23T14:03:04.5453556Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-23T14:03:04.5453902Z         
2025-07-23T14:03:04.5454493Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-23T14:03:04.5455081Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-23T14:03:04.5455727Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-23T14:03:04.5456461Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-23T14:03:04.5457127Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-23T14:03:04.5457798Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-23T14:03:04.5458253Z         BadRequestDetail: 
2025-07-23T14:03:04.5458594Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.37s)
```

- 2025-07-24

### Error 2025-07-24T00:31:04+00:00
```
2025-07-24T00:31:04.9857111Z === RUN   TestMigEncryptionAtRest_basicAWS
2025-07-24T00:31:04.9868021Z    test_terraform_path=/home/runner/work/_temp/66c90480-bd73-4878-893b-343a425a6884/terraform
2025-07-24T00:31:04.9868740Z     resource_migration_test.go:33: Step 1/2 error: Error running apply: exit status 1
2025-07-24T00:31:04.9869177Z         
2025-07-24T00:31:04.9869613Z         Error: error creating Encryption At Rest: 6790e57a9b41416f5c216fee
2025-07-24T00:31:04.9869992Z         
2025-07-24T00:31:04.9870355Z           with mongodbatlas_encryption_at_rest.test,
2025-07-24T00:31:04.9871058Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_encryption_at_rest" "test":
2025-07-24T00:31:04.9871694Z           14: 		resource "mongodbatlas_encryption_at_rest" "test" {
2025-07-24T00:31:04.9872034Z         
2025-07-24T00:31:04.9872610Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6790e57a9b41416f5c216fee/encryptionAtRest
2025-07-24T00:31:04.9873204Z         PATCH: HTTP 400 Bad Request (Error code:
2025-07-24T00:31:04.9873855Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_REQUIRE_PRIVATE_NETWORKING_WHILE_PRIVATE_ENDPOINTS_EXIST")
2025-07-24T00:31:04.9874613Z         Detail: Cannot disable requirePrivateNetworking field when there are private
2025-07-24T00:31:04.9875278Z         endpoints. Remove private endpoints in region(s) US_EAST_1 to disable
2025-07-24T00:31:04.9875908Z         requirePrivateNetworking. Reason: Bad Request. Params: [US_EAST_1],
2025-07-24T00:31:04.9876524Z         BadRequestDetail: 
2025-07-24T00:31:04.9876865Z --- FAIL: TestMigEncryptionAtRest_basicAWS (2.12s)
```
