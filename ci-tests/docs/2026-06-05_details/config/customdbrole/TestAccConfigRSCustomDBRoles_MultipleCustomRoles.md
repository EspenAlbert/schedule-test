# config/customdbrole/TestAccConfigRSCustomDBRoles_MultipleCustomRoles Test Details
# Found 31 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 10)
Success rate: 67.74%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 00:57](#error-2026-05-07t0057440000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.01s
[2026-05-09 00:59](#error-2026-05-09t0059140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 98.08s
[2026-05-14 01:02](#error-2026-05-14t0102530000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.02s
[2026-05-16 01:00](#error-2026-05-16t0100420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 88.07s
[2026-05-19 01:08](#error-2026-05-19t0108200000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.01s
[2026-05-21 01:07](#error-2026-05-21t0107040000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 69.06s
[2026-05-26 02:12](#error-2026-05-26t0212160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-28 01:01](#error-2026-05-28t0101560000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.00s
[2026-05-30 01:08](#error-2026-05-30t0108140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.03s
[2026-06-02 01:11](#error-2026-06-02t0111090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL a minute

### Error 2026-05-07T00:57:44+00:00
```
2026-05-07T00:57:44.5576039Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-07T00:57:44.5580181Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-07T00:57:44.5610452Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-07T00:57:44.5611404Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-07T00:57:44.5612040Z         
2026-05-07T00:57:44.5612741Z         Error: error creating project: test-acc-tf-p-2344696442649750271
2026-05-07T00:57:44.5613359Z         
2026-05-07T00:57:44.5613855Z           with mongodbatlas_project.test,
2026-05-07T00:57:44.5614934Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-07T00:57:44.5615961Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-07T00:57:44.5616741Z         
2026-05-07T00:57:44.5617597Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-07T00:57:44.5618797Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-07T00:57:44.5620052Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-07T00:57:44.5620848Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (64.06s)
```

  - PASS 44 seconds
- 2026-05-08 PASS 29 seconds
- 2026-05-09

### Error 2026-05-09T00:59:14+00:00
```
2026-05-09T00:59:14.3979303Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-09T00:59:14.3981225Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-09T00:59:14.3990375Z   
2026-05-09T00:59:14.4032279Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-09T00:59:14.4032983Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-09T00:59:14.4033584Z         
2026-05-09T00:59:14.4034106Z         Error: error creating project: test-acc-tf-p-5949714985342675950
2026-05-09T00:59:14.4034570Z         
2026-05-09T00:59:14.4034930Z           with mongodbatlas_project.test,
2026-05-09T00:59:14.4035711Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:59:14.4036429Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:59:14.4036799Z         
2026-05-09T00:59:14.4037420Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:59:14.4038225Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:59:14.4038973Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:59:14.4039649Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (98.80s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 35 seconds
- 2026-05-12 PASS a minute
- 2026-05-13 PASS 38 seconds
- 2026-05-14

### Error 2026-05-14T01:02:53+00:00
```
2026-05-14T01:02:53.8570162Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-14T01:02:53.8572192Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-14T01:02:53.8610483Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-14T01:02:53.8611061Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-14T01:02:53.8611466Z         
2026-05-14T01:02:53.8612092Z         Error: error creating project: test-acc-tf-p-963780811806192153
2026-05-14T01:02:53.8612469Z         
2026-05-14T01:02:53.8612796Z           with mongodbatlas_project.test,
2026-05-14T01:02:53.8613440Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-14T01:02:53.8614045Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-14T01:02:53.8614369Z         
2026-05-14T01:02:53.8614869Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-14T01:02:53.8615568Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-14T01:02:53.8616193Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-14T01:02:53.8616697Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (65.19s)
```

- 2026-05-15 PASS 34 seconds
- 2026-05-16

### Error 2026-05-16T01:00:42+00:00
```
2026-05-16T01:00:42.5703107Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-16T01:00:42.5705835Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-16T01:00:42.5716875Z    test_name=TestAccConfigRSCustomDBRoles_MultipleCustomRoles test_working_directory=/tmp/plugintest241204449 test_step_number=1
2026-05-16T01:00:42.5717677Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-16T01:00:42.5718061Z         
2026-05-16T01:00:42.5718604Z         Error: error creating project: test-acc-tf-p-1231505799487039755
2026-05-16T01:00:42.5718970Z         
2026-05-16T01:00:42.5719280Z           with mongodbatlas_project.test,
2026-05-16T01:00:42.5719907Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-16T01:00:42.5720498Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-16T01:00:42.5720810Z         
2026-05-16T01:00:42.5721282Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-16T01:00:42.5721948Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-16T01:00:42.5722555Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:00:42.5723041Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (88.72s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 38 seconds
- 2026-05-19

### Error 2026-05-19T01:08:20+00:00
```
2026-05-19T01:08:20.8990306Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-19T01:08:20.8994875Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-19T01:08:20.9026307Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-19T01:08:20.9027357Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-19T01:08:20.9028238Z         
2026-05-19T01:08:20.9029102Z         Error: error creating project: test-acc-tf-p-8230818275247635989
2026-05-19T01:08:20.9029828Z         
2026-05-19T01:08:20.9030467Z           with mongodbatlas_project.test,
2026-05-19T01:08:20.9031641Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-19T01:08:20.9032865Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-19T01:08:20.9033625Z         
2026-05-19T01:08:20.9034874Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-19T01:08:20.9036226Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-19T01:08:20.9037440Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:20.9038501Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (66.10s)
```

- 2026-05-20 PASS 38 seconds
- 2026-05-21

### Error 2026-05-21T01:07:04+00:00
```
2026-05-21T01:07:04.7181981Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-21T01:07:04.7184505Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-21T01:07:04.7195512Z    test_working_directory=/tmp/plugintest299874563 test_name=TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-21T01:07:04.7196253Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-21T01:07:04.7196645Z         
2026-05-21T01:07:04.7197074Z         Error: error creating project: test-acc-tf-p-9022649201295730809
2026-05-21T01:07:04.7197455Z         
2026-05-21T01:07:04.7197773Z           with mongodbatlas_project.test,
2026-05-21T01:07:04.7198402Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-21T01:07:04.7199004Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-21T01:07:04.7199319Z         
2026-05-21T01:07:04.7199913Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-21T01:07:04.7200582Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-21T01:07:04.7201186Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:07:04.7201676Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (69.62s)
```

- 2026-05-22 PASS 38 seconds
- 2026-05-23 PASS 43 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 37 seconds
- 2026-05-26

### Error 2026-05-26T02:12:16+00:00
```
2026-05-26T02:12:16.0370242Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-26T02:12:16.0374007Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-26T02:12:16.0396594Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-26T02:12:16.0397532Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-26T02:12:16.0398226Z         
2026-05-26T02:12:16.0398952Z         Error: error creating project: test-acc-tf-p-6676896268961504512
2026-05-26T02:12:16.0399602Z         
2026-05-26T02:12:16.0400113Z           with mongodbatlas_project.test,
2026-05-26T02:12:16.0401192Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-26T02:12:16.0402204Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-26T02:12:16.0402723Z         
2026-05-26T02:12:16.0403776Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-26T02:12:16.0404919Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-26T02:12:16.0405947Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:12:16.0406766Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (64.54s)
```

- 2026-05-27 PASS 35 seconds
- 2026-05-28

### Error 2026-05-28T01:01:56+00:00
```
2026-05-28T01:01:56.7583172Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-28T01:01:56.7585659Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-28T01:01:56.7596492Z    test_name=TestAccConfigRSCustomDBRoles_MultipleCustomRoles test_terraform_path=/home/runner/work/_temp/ff6f3694-e1bc-4ea6-9338-ce694b2a54fc/terraform test_working_directory=/tmp/plugintest2161320353 test_step_number=1
2026-05-28T01:01:56.7597725Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-28T01:01:56.7598299Z         
2026-05-28T01:01:56.7598827Z         Error: error creating project: test-acc-tf-p-765251173107691467
2026-05-28T01:01:56.7599490Z         
2026-05-28T01:01:56.7599963Z           with mongodbatlas_project.test,
2026-05-28T01:01:56.7600688Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-28T01:01:56.7601685Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-28T01:01:56.7646941Z         
2026-05-28T01:01:56.7647477Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-28T01:01:56.7648171Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-28T01:01:56.7648778Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:56.7649256Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (64.00s)
```

- 2026-05-29 PASS 31 seconds
- 2026-05-30

### Error 2026-05-30T01:08:14+00:00
```
2026-05-30T01:08:14.0192413Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-30T01:08:14.0194419Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-30T01:08:14.0208604Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-05-30T01:08:14.0209171Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-05-30T01:08:14.0209586Z         
2026-05-30T01:08:14.0210043Z         Error: error creating project: test-acc-tf-p-7511371464459765706
2026-05-30T01:08:14.0210440Z         
2026-05-30T01:08:14.0210780Z           with mongodbatlas_project.test,
2026-05-30T01:08:14.0211416Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-30T01:08:14.0212028Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-30T01:08:14.0212359Z         
2026-05-30T01:08:14.0212862Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-30T01:08:14.0213554Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-30T01:08:14.0214322Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:08:14.0214843Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (72.25s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 30 seconds
- 2026-06-02

### Error 2026-06-02T01:11:09+00:00
```
2026-06-02T01:11:09.5982699Z === RUN   TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-06-02T01:11:09.5984580Z === CONT  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-06-02T01:11:09.5997520Z === NAME  TestAccConfigRSCustomDBRoles_MultipleCustomRoles
2026-06-02T01:11:09.5998228Z     resource_test.go:406: Step 1/2 error: Error running apply: exit status 1
2026-06-02T01:11:09.5998918Z         
2026-06-02T01:11:09.5999485Z         Error: error creating project: test-acc-tf-p-1048973252017318285
2026-06-02T01:11:09.5999976Z         
2026-06-02T01:11:09.6000376Z           with mongodbatlas_project.test,
2026-06-02T01:11:09.6000943Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-06-02T01:11:09.6001578Z           12: 		resource "mongodbatlas_project" "test" {
2026-06-02T01:11:09.6001856Z         
2026-06-02T01:11:09.6002259Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-06-02T01:11:09.6002794Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-06-02T01:11:09.6003286Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:11:09.6003689Z --- FAIL: TestAccConfigRSCustomDBRoles_MultipleCustomRoles (63.58s)
```

- 2026-06-03 PASS 37 seconds
- 2026-06-04 PASS 47 seconds
- 2026-06-05 PASS 34 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 33 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 32 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 35 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 32 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
