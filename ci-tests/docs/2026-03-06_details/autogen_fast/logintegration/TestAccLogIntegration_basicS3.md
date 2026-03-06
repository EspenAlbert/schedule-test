# autogen_fast/logintegration/TestAccLogIntegration_basicS3 Test Details
# Found 18 TestRuns in dev, qa from 2026-02-19 to 2026-03-06 from master branch: 1 unique tests, FAIL(x 10) PASS(x 8)
Success rate: 44.44%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-25 00:43](#error-2026-02-25t0043140000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699e457d3a01dbbf5543743a/cloudProviderAccess/699e4589f7ad7e0bfba29355 | dev | flaky_500 | 37.01s
[2026-02-26 00:38](#error-2026-02-26t0038470000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/699f95f36ef93d0b6c1a0996/cloudProviderAccess/699f95feb9916b47c8827d6c | dev | flaky_500 | 35.08s
[2026-02-27 00:40](#error-2026-02-27t0040540000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a0e7eebae6e5998b0f9b06/cloudProviderAccess/69a0e7fbbae6e5998b0fbe66 | dev | flaky_500 | 39.06s
[2026-02-28 00:36](#error-2026-02-28t0036060000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a2384f9581f2334151605c/cloudProviderAccess/69a2385b9581f23341518612 | dev | flaky_500 | 38.09s
[2026-03-02 00:39](#error-2026-03-02t0039400000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a4dc29756ae9983e9715e9/cloudProviderAccess/69a4dc34d073a224c6f88c93 | dev | flaky_500 | 35.02s
[2026-03-02 11:17](#error-2026-03-02t1117420000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a571b28f95f65291b76f3b/cloudProviderAccess/69a571bdb6f2072d53b31c2e | dev | flaky_500 | 36.02s
[2026-03-03 00:41](#error-2026-03-03t0041500000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a62df7eeb869d2b5047db3/cloudProviderAccess/69a62e34eeb869d2b5051ab1 | dev | flaky_500 | 87.02s
[2026-03-04 00:38](#error-2026-03-04t0038570000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a77efec7d3cdfdfb643572/cloudProviderAccess/69a77f09a0aca1fefeec0fb5 | dev | flaky_500 | 34.05s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16: MISSING
- 2026-02-17: MISSING
- 2026-02-18: MISSING
- 2026-02-19 PASS a minute
- 2026-02-20 PASS a minute
- 2026-02-21 PASS a minute
- 2026-02-22: MISSING
- 2026-02-23 PASS a minute
- 2026-02-24 PASS a minute
- 2026-02-25

### Error 2026-02-25T00:43:14+00:00
```
2026-02-25T00:43:14.4485181Z === RUN   TestAccLogIntegration_basicS3
2026-02-25T00:43:14.4486367Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-5905641528900690599
2026-02-25T00:43:14.4488141Z === CONT  TestAccLogIntegration_basicS3
2026-02-25T00:43:14.4490996Z 2026/02/25 00:42:50 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699e457d3a01dbbf5543743a/cloudProviderAccess/699e4589f7ad7e0bfba29355 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6695333208371095178). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-6695333208371095178], BadRequestDetail:  
2026-02-25T00:43:14.4493881Z 2026/02/25 00:42:50 retrying
2026-02-25T00:43:14.4508598Z    test_terraform_path=/home/runner/work/_temp/08de51e4-a24a-452a-b42a-d4de68693cfd/terraform
2026-02-25T00:43:14.4509344Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-02-25T00:43:14.4509813Z         
2026-02-25T00:43:14.4512046Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/699e457d3a01dbbf5543743a/cloudProviderAccess/699e4589f7ad7e0bfba29355 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-02-25T00:43:14.4513384Z         
2026-02-25T00:43:14.4513959Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-02-25T00:43:14.4514823Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-02-25T00:43:14.4515634Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-02-25T00:43:14.4516037Z         
2026-02-25T00:43:14.4516311Z --- FAIL: TestAccLogIntegration_basicS3 (37.11s)
```

- 2026-02-26

### Error 2026-02-26T00:38:47+00:00
```
2026-02-26T00:38:47.4294759Z === RUN   TestAccLogIntegration_basicS3
2026-02-26T00:38:47.4295478Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-6733926970523054964
2026-02-26T00:38:47.4296330Z === CONT  TestAccLogIntegration_basicS3
2026-02-26T00:38:47.4298380Z 2026/02/26 00:38:23 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f95f36ef93d0b6c1a0996/cloudProviderAccess/699f95feb9916b47c8827d6c PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5524346612478867202). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-5524346612478867202], BadRequestDetail:  
2026-02-26T00:38:47.4317271Z 2026/02/26 00:38:23 retrying
2026-02-26T00:38:47.4329562Z    test_name=TestAccLogIntegration_basicS3 test_terraform_path=/home/runner/work/_temp/f354f775-35b3-439d-bb01-1335cbdca326/terraform
2026-02-26T00:38:47.4330796Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-02-26T00:38:47.4331278Z         
2026-02-26T00:38:47.4333371Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/699f95f36ef93d0b6c1a0996/cloudProviderAccess/699f95feb9916b47c8827d6c GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-02-26T00:38:47.4334674Z         
2026-02-26T00:38:47.4335115Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-02-26T00:38:47.4335961Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-02-26T00:38:47.4336762Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-02-26T00:38:47.4337164Z         
2026-02-26T00:38:47.4337423Z --- FAIL: TestAccLogIntegration_basicS3 (35.84s)
```

- 2026-02-27

### Error 2026-02-27T00:40:54+00:00
```
2026-02-27T00:40:54.5349306Z === RUN   TestAccLogIntegration_basicS3
2026-02-27T00:40:54.5350183Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-4139372193389104866
2026-02-27T00:40:54.5351573Z === CONT  TestAccLogIntegration_basicS3
2026-02-27T00:40:54.5354683Z 2026/02/27 00:40:29 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a0e7eebae6e5998b0f9b06/cloudProviderAccess/69a0e7fbbae6e5998b0fbe66 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-949071710844932582). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-949071710844932582], BadRequestDetail:  
2026-02-27T00:40:54.5357468Z 2026/02/27 00:40:29 retrying
2026-02-27T00:40:54.5373065Z    test_working_directory=/tmp/plugintest4059721737 test_step_number=1
2026-02-27T00:40:54.5373756Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-02-27T00:40:54.5374208Z         
2026-02-27T00:40:54.5376521Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a0e7eebae6e5998b0f9b06/cloudProviderAccess/69a0e7fbbae6e5998b0fbe66 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-02-27T00:40:54.5377851Z         
2026-02-27T00:40:54.5378289Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-02-27T00:40:54.5379110Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-02-27T00:40:54.5379897Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-02-27T00:40:54.5380293Z         
2026-02-27T00:40:54.5380548Z --- FAIL: TestAccLogIntegration_basicS3 (39.59s)
```

- 2026-02-28

### Error 2026-02-28T00:36:06+00:00
```
2026-02-28T00:36:06.9626732Z === RUN   TestAccLogIntegration_basicS3
2026-02-28T00:36:06.9627946Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-5780713100362328398
2026-02-28T00:36:06.9629431Z === CONT  TestAccLogIntegration_basicS3
2026-02-28T00:36:06.9632403Z 2026/02/28 00:35:40 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a2384f9581f2334151605c/cloudProviderAccess/69a2385b9581f23341518612 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2827392452615815973). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2827392452615815973], BadRequestDetail:  
2026-02-28T00:36:06.9634575Z 2026/02/28 00:35:40 retrying
2026-02-28T00:36:06.9649219Z    test_terraform_path=/home/runner/work/_temp/2d9062bc-4113-44f9-9711-39070d57f1e8/terraform test_working_directory=/tmp/plugintest2850875008 test_name=TestAccLogIntegration_basicS3
2026-02-28T00:36:06.9650553Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-02-28T00:36:06.9651032Z         
2026-02-28T00:36:06.9653378Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a2384f9581f2334151605c/cloudProviderAccess/69a2385b9581f23341518612 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-02-28T00:36:06.9654750Z         
2026-02-28T00:36:06.9655207Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-02-28T00:36:06.9656056Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-02-28T00:36:06.9656877Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-02-28T00:36:06.9657291Z         
2026-02-28T00:36:06.9657557Z --- FAIL: TestAccLogIntegration_basicS3 (38.91s)
```

- 2026-03-01: MISSING
- 2026-03-02
  - FAIL 35 seconds

### Error 2026-03-02T00:39:40+00:00
```
2026-03-02T00:39:40.9538875Z === RUN   TestAccLogIntegration_basicS3
2026-03-02T00:39:40.9540018Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-7291200112476742914
2026-03-02T00:39:40.9541487Z === CONT  TestAccLogIntegration_basicS3
2026-03-02T00:39:40.9545048Z 2026/03/02 00:39:17 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc29756ae9983e9715e9/cloudProviderAccess/69a4dc34d073a224c6f88c93 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-790442897847353042). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-790442897847353042], BadRequestDetail:  
2026-03-02T00:39:40.9547127Z 2026/03/02 00:39:17 retrying
2026-03-02T00:39:40.9561427Z    test_name=TestAccLogIntegration_basicS3
2026-03-02T00:39:40.9562017Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-03-02T00:39:40.9562472Z         
2026-03-02T00:39:40.9566085Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a4dc29756ae9983e9715e9/cloudProviderAccess/69a4dc34d073a224c6f88c93 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-02T00:39:40.9568717Z         
2026-03-02T00:39:40.9569456Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-03-02T00:39:40.9570494Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-03-02T00:39:40.9571315Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-03-02T00:39:40.9571720Z         
2026-03-02T00:39:40.9571995Z --- FAIL: TestAccLogIntegration_basicS3 (35.16s)
```

  - FAIL 36 seconds

### Error 2026-03-02T11:17:42+00:00
```
2026-03-02T11:17:42.8724905Z === RUN   TestAccLogIntegration_basicS3
2026-03-02T11:17:42.8725664Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-6867670236528982415
2026-03-02T11:17:42.8727594Z === CONT  TestAccLogIntegration_basicS3
2026-03-02T11:17:42.8731119Z 2026/03/02 11:17:18 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a571b28f95f65291b76f3b/cloudProviderAccess/69a571bdb6f2072d53b31c2e PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-432923565229733613). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-432923565229733613], BadRequestDetail:  
2026-03-02T11:17:42.8733279Z 2026/03/02 11:17:18 retrying
2026-03-02T11:17:42.8746959Z   
2026-03-02T11:17:42.8747453Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-03-02T11:17:42.8747921Z         
2026-03-02T11:17:42.8749880Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a571b28f95f65291b76f3b/cloudProviderAccess/69a571bdb6f2072d53b31c2e GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-02T11:17:42.8751184Z         
2026-03-02T11:17:42.8751642Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-03-02T11:17:42.8752492Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-03-02T11:17:42.8753293Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-03-02T11:17:42.8753716Z         
2026-03-02T11:17:42.8753991Z --- FAIL: TestAccLogIntegration_basicS3 (36.22s)
```

- 2026-03-03

### Error 2026-03-03T00:41:50+00:00
```
2026-03-03T00:41:50.7598394Z === RUN   TestAccLogIntegration_basicS3
2026-03-03T00:41:50.7599559Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-1394144411881880766
2026-03-03T00:41:50.7601044Z === CONT  TestAccLogIntegration_basicS3
2026-03-03T00:41:50.7604700Z 2026/03/03 00:41:25 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a62df7eeb869d2b5047db3/cloudProviderAccess/69a62e34eeb869d2b5051ab1 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3814957635206941173). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-3814957635206941173], BadRequestDetail:  
2026-03-03T00:41:50.7608351Z 2026/03/03 00:41:25 retrying
2026-03-03T00:41:50.7631811Z   
2026-03-03T00:41:50.7632681Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-03-03T00:41:50.7633461Z         
2026-03-03T00:41:50.7637380Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a62df7eeb869d2b5047db3/cloudProviderAccess/69a62e34eeb869d2b5051ab1 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:41:50.7639760Z         
2026-03-03T00:41:50.7640532Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-03-03T00:41:50.7642073Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-03-03T00:41:50.7643538Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-03-03T00:41:50.7644220Z         
2026-03-03T00:41:50.7644685Z --- FAIL: TestAccLogIntegration_basicS3 (87.20s)
```

- 2026-03-04

### Error 2026-03-04T00:38:57+00:00
```
2026-03-04T00:38:57.1044977Z === RUN   TestAccLogIntegration_basicS3
2026-03-04T00:38:57.1045825Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-3925813939730811868
2026-03-04T00:38:57.1046915Z === CONT  TestAccLogIntegration_basicS3
2026-03-04T00:38:57.1049006Z 2026/03/04 00:38:34 warning issue performing authorize: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77efec7d3cdfdfb643572/cloudProviderAccess/69a77f09a0aca1fefeec0fb5 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-101541361127939389). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-101541361127939389], BadRequestDetail:  
2026-03-04T00:38:57.1050877Z 2026/03/04 00:38:34 retrying
2026-03-04T00:38:57.1063589Z    test_name=TestAccLogIntegration_basicS3 test_terraform_path=/home/runner/work/_temp/4f6349c3-cee9-45fc-b2c4-d073189a7aee/terraform
2026-03-04T00:38:57.1064496Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-03-04T00:38:57.1064968Z         
2026-03-04T00:38:57.1068585Z         Error: error reading cloud provider access https://cloud-dev.mongodb.com/api/atlas/v2/groups/69a77efec7d3cdfdfb643572/cloudProviderAccess/69a77f09a0aca1fefeec0fb5 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-04T00:38:57.1069992Z         
2026-03-04T00:38:57.1070468Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-03-04T00:38:57.1071306Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-03-04T00:38:57.1072108Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-03-04T00:38:57.1072519Z         
2026-03-04T00:38:57.1072783Z --- FAIL: TestAccLogIntegration_basicS3 (34.45s)
```

- 2026-03-05 PASS 2 minutes
- 2026-03-06 PASS a minute

## QA Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-01 00:44](#error-2026-03-01t0044220000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a38bc175e18691c08ba3eb/cloudProviderAccess/69a38bcd75e18691c08bb310 | qa | flaky_500 | 36.07s
[2026-03-03 09:32](#error-2026-03-03t0932170000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/69a6aa7e61f800e9358a6bf0/cloudProviderAccess/69a6aa89aa1a482df74e443c | qa | flaky_500 | 35.03s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08: MISSING
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15: MISSING
- 2026-02-16: MISSING
- 2026-02-17: MISSING
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS a minute
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01

### Error 2026-03-01T00:44:22+00:00
```
2026-03-01T00:44:22.0314512Z === RUN   TestAccLogIntegration_basicS3
2026-03-01T00:44:22.0315238Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-5798267155715119122
2026-03-01T00:44:22.0316040Z === CONT  TestAccLogIntegration_basicS3
2026-03-01T00:44:22.0318799Z 2026/03/01 00:43:58 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a38bc175e18691c08ba3eb/cloudProviderAccess/69a38bcd75e18691c08bb310 PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2995545633578262390). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2995545633578262390], BadRequestDetail:  
2026-03-01T00:44:22.0320713Z 2026/03/01 00:43:58 retrying
2026-03-01T00:44:22.0332685Z   
2026-03-01T00:44:22.0333145Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-03-01T00:44:22.0333562Z         
2026-03-01T00:44:22.0335287Z         Error: error reading cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a38bc175e18691c08ba3eb/cloudProviderAccess/69a38bcd75e18691c08bb310 GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-01T00:44:22.0336448Z         
2026-03-01T00:44:22.0336855Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-03-01T00:44:22.0337648Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-03-01T00:44:22.0338393Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-03-01T00:44:22.0338776Z         
2026-03-01T00:44:22.0339028Z --- FAIL: TestAccLogIntegration_basicS3 (36.69s)
```

- 2026-03-02: MISSING
- 2026-03-03

### Error 2026-03-03T09:32:17+00:00
```
2026-03-03T09:32:17.8603293Z === RUN   TestAccLogIntegration_basicS3
2026-03-03T09:32:17.8604129Z     resource_test.go:52: Creating execution project (1): test-acc-tf-p-1703538117948184883
2026-03-03T09:32:17.8605197Z === CONT  TestAccLogIntegration_basicS3
2026-03-03T09:32:17.8607763Z 2026/03/03 09:31:54 warning issue performing authorize: https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a6aa7e61f800e9358a6bf0/cloudProviderAccess/69a6aa89aa1a482df74e443c PATCH: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas cannot assume the specified role (arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2248189113502865680). Reason: Bad Request. Params: [arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2248189113502865680], BadRequestDetail:  
2026-03-03T09:32:17.8610178Z 2026/03/03 09:31:54 retrying
2026-03-03T09:32:17.8624434Z    test_name=TestAccLogIntegration_basicS3 test_terraform_path=/home/runner/work/_temp/5b119c2f-e6d1-48c0-b390-591c84d8e210/terraform test_working_directory=/tmp/plugintest1814110059
2026-03-03T09:32:17.8625540Z     resource_test.go:60: Step 1/4 error: Error running post-apply refresh plan: exit status 1
2026-03-03T09:32:17.8626135Z         
2026-03-03T09:32:17.8629952Z         Error: error reading cloud provider access https://cloud-qa.mongodb.com/api/atlas/v2/groups/69a6aa7e61f800e9358a6bf0/cloudProviderAccess/69a6aa89aa1a482df74e443c GET: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T09:32:17.8631372Z         
2026-03-03T09:32:17.8631850Z           with mongodbatlas_cloud_provider_access_setup.setup_only,
2026-03-03T09:32:17.8632952Z           on terraform_plugin_test.tf line 74, in resource "mongodbatlas_cloud_provider_access_setup" "setup_only":
2026-03-03T09:32:17.8633795Z           74: 		resource "mongodbatlas_cloud_provider_access_setup" "setup_only" {
2026-03-03T09:32:17.8634225Z         
2026-03-03T09:32:17.8634497Z --- FAIL: TestAccLogIntegration_basicS3 (35.35s)
```

- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
