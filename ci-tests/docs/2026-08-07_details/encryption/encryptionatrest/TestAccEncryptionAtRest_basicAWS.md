# encryption/encryptionatrest/TestAccEncryptionAtRest_basicAWS Test Details
# Found 31 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 5)
Success rate: 83.87%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-10 00:51](#error-2026-07-10t0051550000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/6a50419eaea6151790a3603b/cloudProviderAccess/6a5041f6e2d93fff09dd069b | dev |  | 52.02s
[2026-07-11 00:45](#error-2026-07-11t0045300000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 68.06s
[2026-07-16 00:44](#error-2026-07-16t0044510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.01s
[2026-07-18 00:44](#error-2026-07-18t0044020000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-07-23 00:47](#error-2026-07-23t0047280000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09 PASS a minute
- 2026-07-10

### Error 2026-07-10T00:51:55+00:00
```
2026-07-10T00:51:55.1471121Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-07-10T00:51:55.1474043Z 2026/07/10 00:51:03 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a50419eaea6151790a3603b/cloudProviderAccess/6a5041f6e2d93fff09dd069b PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6098651731556650743). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6098651731556650743], BadRequestDetail:  
2026-07-10T00:51:55.1475962Z 2026/07/10 00:51:03 retrying
2026-07-10T00:51:55.1488664Z   
2026-07-10T00:51:55.1489149Z     resource_test.go:30: Step 3/4 error: Error running pre-apply plan: exit status 1
2026-07-10T00:51:55.1489601Z         
2026-07-10T00:51:55.1491302Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a50419eaea6151790a3603b/cloudProviderAccess/6a5041f6e2d93fff09dd069b GET: HTTP 403 Forbidden (Error code: "") Detail:  Reason: . Params: [], BadRequestDetail: 
2026-07-10T00:51:55.1492345Z         
2026-07-10T00:51:55.1493029Z           with mongodbatlas_cloud_provider_access_authorization.auth_role,
2026-07-10T00:51:55.1493992Z           on terraform_plugin_test.tf line 68, in resource "mongodbatlas_cloud_provider_access_authorization" "auth_role":
2026-07-10T00:51:55.1494902Z           68: 		resource "mongodbatlas_cloud_provider_access_authorization" "auth_role" {
2026-07-10T00:51:55.1495377Z         
2026-07-10T00:51:55.1495692Z --- FAIL: TestAccEncryptionAtRest_basicAWS (52.21s)
```

- 2026-07-11

### Error 2026-07-11T00:45:30+00:00
```
2026-07-11T00:45:30.8318130Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-07-11T00:45:30.8319221Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-3799066861490025416
2026-07-11T00:45:30.8319829Z     resource_test.go:30: 
2026-07-11T00:45:30.8320828Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:45:30.8322706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:45:30.8324600Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:45:30.8326516Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-07-11T00:45:30.8328668Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-07-11T00:45:30.8330128Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T00:45:30.8330732Z         	Error:      	Received unexpected error:
2026-07-11T00:45:30.8332774Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:30.8333881Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-07-11T00:45:30.8335679Z         	Messages:   	Project creation failed: test-acc-tf-p-3799066861490025416, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:45:30.8336860Z --- FAIL: TestAccEncryptionAtRest_basicAWS (68.62s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a minute
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16

### Error 2026-07-16T00:44:51+00:00
```
2026-07-16T00:44:51.0726645Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-07-16T00:44:51.0731470Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-8087452796351414480
2026-07-16T00:44:51.0733087Z     resource_test.go:30: 
2026-07-16T00:44:51.0735429Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:44:51.0739345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:44:51.0743688Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:44:51.0747838Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-07-16T00:44:51.0752114Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-07-16T00:44:51.0754666Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-16T00:44:51.0755773Z         	Error:      	Received unexpected error:
2026-07-16T00:44:51.0759802Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:51.0762354Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-07-16T00:44:51.0766005Z         	Messages:   	Project creation failed: test-acc-tf-p-8087452796351414480, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:44:51.0768478Z --- FAIL: TestAccEncryptionAtRest_basicAWS (69.09s)
```

- 2026-07-17 PASS a minute
- 2026-07-18

### Error 2026-07-18T00:44:02+00:00
```
2026-07-18T00:44:02.7797391Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-07-18T00:44:02.7800227Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-9132083646229627950
2026-07-18T00:44:02.7801166Z     resource_test.go:30: 
2026-07-18T00:44:02.7802979Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:44:02.7806173Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:44:02.7809280Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:44:02.7812705Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-07-18T00:44:02.7816061Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-07-18T00:44:02.7818215Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-18T00:44:02.7819118Z         	Error:      	Received unexpected error:
2026-07-18T00:44:02.7822622Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7824392Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-07-18T00:44:02.7827387Z         	Messages:   	Project creation failed: test-acc-tf-p-9132083646229627950, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:44:02.7829321Z --- FAIL: TestAccEncryptionAtRest_basicAWS (66.92s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21 PASS 2 minutes
- 2026-07-22 PASS a minute
- 2026-07-23

### Error 2026-07-23T00:47:28+00:00
```
2026-07-23T00:47:28.6737575Z === RUN   TestAccEncryptionAtRest_basicAWS
2026-07-23T00:47:28.6738515Z     resource_test.go:30: Creating execution project (1): test-acc-tf-p-4179168860172661835
2026-07-23T00:47:28.6739812Z     resource_test.go:30: 
2026-07-23T00:47:28.6741807Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:47:28.6746013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:47:28.6749118Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:47:28.6751736Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:37
2026-07-23T00:47:28.6753790Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/encryptionatrest/resource_test.go:30
2026-07-23T00:47:28.6755072Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-23T00:47:28.6755648Z         	Error:      	Received unexpected error:
2026-07-23T00:47:28.6757643Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:28.6759011Z         	Test:       	TestAccEncryptionAtRest_basicAWS
2026-07-23T00:47:28.6760862Z         	Messages:   	Project creation failed: test-acc-tf-p-4179168860172661835, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-23T00:47:28.6762517Z --- FAIL: TestAccEncryptionAtRest_basicAWS (61.51s)
```

- 2026-07-24 PASS a minute
- 2026-07-25 PASS a minute
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS a minute
- 2026-07-29 PASS a minute
- 2026-07-30 PASS a minute
- 2026-07-31 PASS a minute
- 2026-08-01 PASS a minute
- 2026-08-02: MISSING
- 2026-08-03 PASS a minute
- 2026-08-04 PASS a minute
- 2026-08-05 PASS a minute
- 2026-08-06 PASS a minute
- 2026-08-07 PASS a minute

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a minute
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a minute
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 2 minutes
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a minute
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a minute
  - PASS a minute
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a minute
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
