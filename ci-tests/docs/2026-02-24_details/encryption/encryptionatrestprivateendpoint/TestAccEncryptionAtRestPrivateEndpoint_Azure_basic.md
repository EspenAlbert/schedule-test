# encryption/encryptionatrestprivateendpoint/TestAccEncryptionAtRestPrivateEndpoint_Azure_basic Test Details
# Found 32 TestRuns in dev, qa from 2026-01-26 to 2026-02-24 from master branch: 1 unique tests, PASS(x 24) FAIL(x 8)
Success rate: 75.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-01-29 00:42](#error-2026-01-29t0042410000) | UNEXPECTED_ERROR /api/atlas/v2/groups/697aab8b364effe4d2ba12ab/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 9.03s
[2026-02-03 00:40](#error-2026-02-03t0040480000) | UNEXPECTED_ERROR /api/atlas/v2/groups/698143bab2e54ee995905c96/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 8.05s
[2026-02-04 04:36](#error-2026-02-04t0436240000) |  | dev | timeout | 10809.09s
[2026-02-05 01:36](#error-2026-02-05t0136250000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6983e69cb0f8d5bab818fc2a/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 7.05s
[2026-02-16 00:47](#error-2026-02-16t0047490000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6992674160ee1ae24ac980ab/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 4.04s
[2026-02-19 00:45](#error-2026-02-19t0045430000) | UNEXPECTED_ERROR /api/atlas/v2/groups/69965bcb99696b9761bc5980/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 10.05s
[2026-02-21 00:42](#error-2026-02-21t0042440000) | UNEXPECTED_ERROR /api/atlas/v2/groups/6998fe2623648dd3abd53dab/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 8.03s
[2026-02-24 00:45](#error-2026-02-24t0045540000) | UNEXPECTED_ERROR /api/atlas/v2/groups/699cf2a7ae2412ce621194ad/encryptionAtRest/AZURE/privateEndpoints | dev | flaky_500 | 8.07s

### Timeline
- 2026-01-25: MISSING
- 2026-01-26 PASS 3 minutes
- 2026-01-27 PASS 3 minutes
- 2026-01-28 PASS 3 minutes
- 2026-01-29

### Error 2026-01-29T00:42:41+00:00
```
2026-01-29T00:42:41.0772628Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-01-29T00:42:41.0773906Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-9164203004865338659
2026-01-29T00:42:41.0792171Z   
2026-01-29T00:42:41.0792762Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-01-29T00:42:41.0793365Z         
2026-01-29T00:42:41.0793813Z         Error: error creating resource
2026-01-29T00:42:41.0794126Z         
2026-01-29T00:42:41.0794593Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-01-29T00:42:41.0795470Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-01-29T00:42:41.0796305Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-01-29T00:42:41.0796737Z         
2026-01-29T00:42:41.0797692Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/697aab8b364effe4d2ba12ab/encryptionAtRest/AZURE/privateEndpoints
2026-01-29T00:42:41.0798571Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-01-29T00:42:41.0799228Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-01-29T00:42:41.0799670Z         BadRequestDetail: 
2026-01-29T00:42:41.0800086Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (9.34s)
```

- 2026-01-30 PASS 3 minutes
- 2026-01-31 PASS 4 minutes
- 2026-02-01: MISSING
- 2026-02-02 PASS 3 minutes
- 2026-02-03

### Error 2026-02-03T00:40:48+00:00
```
2026-02-03T00:40:48.1082683Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-03T00:40:48.1083879Z     resource_test.go:43: Creating execution project (1): test-acc-tf-p-1581480714224903196
2026-02-03T00:40:48.1101511Z   
2026-02-03T00:40:48.1101959Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-03T00:40:48.1102383Z         
2026-02-03T00:40:48.1102699Z         Error: error creating resource
2026-02-03T00:40:48.1103013Z         
2026-02-03T00:40:48.1103474Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-03T00:40:48.1104348Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-03T00:40:48.1105185Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-03T00:40:48.1105625Z         
2026-02-03T00:40:48.1106613Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/698143bab2e54ee995905c96/encryptionAtRest/AZURE/privateEndpoints
2026-02-03T00:40:48.1107492Z         POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail:
2026-02-03T00:40:48.1108138Z         Unexpected error. Reason: Internal Server Error. Params: [],
2026-02-03T00:40:48.1108583Z         BadRequestDetail: 
2026-02-03T00:40:48.1108990Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (8.54s)
```

- 2026-02-04

### Error 2026-02-04T04:36:24+00:00
```
2026-02-04T04:36:24.6701393Z === RUN   TestAccEncryptionAtRestPrivateEndpoint_Azure_basic
2026-02-04T04:36:24.6705447Z   diagnostic_detail=
2026-02-04T04:36:24.6714547Z    diagnostic_severity=ERROR diagnostic_summary="error when waiting for status transition in creation" tf_req_id=2d90f538-a717-6cf8-ed64-397e68f51a3d
2026-02-04T04:36:24.6728766Z   
2026-02-04T04:36:24.6729555Z     resource_test.go:43: Step 2/3 error: Error running apply: exit status 1
2026-02-04T04:36:24.6730336Z         
2026-02-04T04:36:24.6731155Z         Error: error when waiting for status transition in creation
2026-02-04T04:36:24.6732121Z         
2026-02-04T04:36:24.6733005Z           with mongodbatlas_encryption_at_rest_private_endpoint.test,
2026-02-04T04:36:24.6734094Z           on terraform_plugin_test.tf line 33, in resource "mongodbatlas_encryption_at_rest_private_endpoint" "test":
2026-02-04T04:36:24.6735160Z           33: 		resource "mongodbatlas_encryption_at_rest_private_endpoint" "test" {
2026-02-04T04:36:24.6735593Z         
2026-02-04T04:36:24.6736073Z         timeout while waiting for state to become 'PENDING_ACCEPTANCE, ACTIVE,
2026-02-04T04:36:24.6736641Z         FAILED' (last state: 'INITIATING', timeout: 3h0m0s)
2026-02-04T04:36:24.6737253Z         will run cleanup because delete_on_create_timeout is true. If you suspect a
2026-02-04T04:36:24.6737945Z         transient error, wait before retrying to allow resource deletion to finish
2026-02-04T04:36:24.6738404Z         cleanup failed:
2026-02-04T04:36:24.6739303Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7fd2/encryptionAtRest/AZURE/privateEndpoints/698294b64e657829c574fbfd
2026-02-04T04:36:24.6740254Z         DELETE: HTTP 400 Bad Request (Error code:
2026-02-04T04:36:24.6740836Z         "ENCRYPTION_AT_REST_PRIVATE_ENDPOINT_DELETE_BLOCKED_DURING_PROVISIONING")
2026-02-04T04:36:24.6741488Z         Detail: Failed to delete Encryption at Rest Private endpoint with id
2026-02-04T04:36:24.6742150Z         [698294b64e657829c574fbfd] during IN_PROGRESS state. Please try again later.
2026-02-04T04:36:24.6742834Z         Reason: Bad Request. Params: [[698294b64e657829c574fbfd]], BadRequestDetail: 
2026-02-04T04:36:24.6755241Z    test_step_number=2 test_name=TestAccEncryptionAtRestPrivateEndpoint_Azure_basic test_terraform_path=/home/runner/work/_temp/9fe82a46-1abe-44b3-80f2-935640a2286a/terraform
2026-02-04T04:36:24.6756332Z     panic.go:615: Error running post-test destroy, there may be dangling resources: exit status 1
2026-02-04T04:36:24.6756823Z         
2026-02-04T04:36:24.6757153Z         Error: error when destroying resource
2026-02-04T04:36:24.6757459Z         
2026-02-04T04:36:24.6757887Z         error deleting Encryption At Rest: (6982945e09271d271f2f7fd2):
2026-02-04T04:36:24.6758786Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6982945e09271d271f2f7fd2/encryptionAtRest
2026-02-04T04:36:24.6759400Z         PATCH: HTTP 400 Bad Request (Error code:
2026-02-04T04:36:24.6759956Z         "CANNOT_DISABLE_ENCRYPTION_AT_REST_DUE_TO_PRIVATE_ENDPOINTS") Detail:
2026-02-04T04:36:24.6760622Z         Encryption at Rest cannot be disabled when private endpoints are present.
2026-02-04T04:36:24.6761202Z         Reason: Bad Request. Params: [], BadRequestDetail: 
2026-02-04T04:36:24.6761692Z --- FAIL: TestAccEncryptionAtRestPrivateEndpoint_Azure_basic (10809.90s)
```

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


## QA Environment
### Timeline
- 2026-01-25: MISSING
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 3 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
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
