# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 27) FAIL(x 7)
Success rate: 79.41%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-09 00:40](#error-2026-04-09t0040090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 118.08s
[2026-04-11 00:44](#error-2026-04-11t0044340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 110.05s
[2026-04-14 00:51](#error-2026-04-14t0051210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.07s
[2026-04-16 00:51](#error-2026-04-16t0051510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 74.01s
[2026-04-23 00:52](#error-2026-04-23t0052420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s
[2026-04-25 00:47](#error-2026-04-25t0047480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s
[2026-04-30 00:56](#error-2026-04-30t0056090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 23 seconds
- 2026-04-08 PASS 11 seconds
- 2026-04-09

### Error 2026-04-09T00:40:09+00:00
```
2026-04-09T00:40:09.8960346Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-09T00:40:09.8961478Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3306145385147484560
2026-04-09T00:40:09.8977915Z    test_name=TestAccCloudUserProjectAssignment_basic test_terraform_path=/home/runner/work/_temp/5822d501-5d4f-4cd2-bbdb-22a0df302505/terraform test_working_directory=/tmp/plugintest379923012
2026-04-09T00:40:09.8979237Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-04-09T00:40:09.8979941Z         
2026-04-09T00:40:09.8980674Z         Error: error creating project: 69d6f4f2bcd76cc4105e64ed
2026-04-09T00:40:09.8981117Z         
2026-04-09T00:40:09.8981435Z           with mongodbatlas_project.test,
2026-04-09T00:40:09.8982065Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-09T00:40:09.8982660Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-09T00:40:09.8982974Z         
2026-04-09T00:40:09.8983457Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-09T00:40:09.8984119Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-09T00:40:09.8984725Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-09T00:40:09.8985185Z --- FAIL: TestAccCloudUserProjectAssignment_basic (118.75s)
```

- 2026-04-10 PASS 11 seconds
- 2026-04-11

### Error 2026-04-11T00:44:34+00:00
```
2026-04-11T00:44:34.3867873Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-11T00:44:34.3869335Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-6567406693471645598
2026-04-11T00:44:34.3888696Z   
2026-04-11T00:44:34.3889365Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-04-11T00:44:34.3890078Z         
2026-04-11T00:44:34.3890777Z         Error: error creating project: 69d99902a916b4e117990d6c
2026-04-11T00:44:34.3891406Z         
2026-04-11T00:44:34.3891723Z           with mongodbatlas_project.test,
2026-04-11T00:44:34.3892353Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-11T00:44:34.3892949Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-11T00:44:34.3893257Z         
2026-04-11T00:44:34.3893735Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-11T00:44:34.3894410Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-11T00:44:34.3895030Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:44:34.3895474Z --- FAIL: TestAccCloudUserProjectAssignment_basic (110.51s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 12 seconds
- 2026-04-14

### Error 2026-04-14T00:51:21+00:00
```
2026-04-14T00:51:21.0743472Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-14T00:51:21.0747854Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-7479853620214418881
2026-04-14T00:51:21.0768332Z    test_working_directory=/tmp/plugintest1495355662 test_name=TestAccCloudUserProjectAssignment_basic
2026-04-14T00:51:21.0769912Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-04-14T00:51:21.0770606Z         
2026-04-14T00:51:21.0771298Z         Error: error creating project: 69dd8f1a7e7703c9cb108314
2026-04-14T00:51:21.0771871Z         
2026-04-14T00:51:21.0772394Z           with mongodbatlas_project.test,
2026-04-14T00:51:21.0773537Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-14T00:51:21.0774584Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-14T00:51:21.0775108Z         
2026-04-14T00:51:21.0775959Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-14T00:51:21.0777165Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-14T00:51:21.0778628Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-14T00:51:21.0779445Z --- FAIL: TestAccCloudUserProjectAssignment_basic (109.66s)
```

- 2026-04-15 PASS 10 seconds
- 2026-04-16

### Error 2026-04-16T00:51:51+00:00
```
2026-04-16T00:51:51.6627839Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-16T00:51:51.6632382Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5919170965646107421
2026-04-16T00:51:51.6649331Z   
2026-04-16T00:51:51.6649817Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-04-16T00:51:51.6650254Z         
2026-04-16T00:51:51.6650715Z         Error: error creating project: 69e0325c1ec945fedc71ad32
2026-04-16T00:51:51.6651107Z         
2026-04-16T00:51:51.6651459Z           with mongodbatlas_project.test,
2026-04-16T00:51:51.6652224Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-16T00:51:51.6652881Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-16T00:51:51.6653215Z         
2026-04-16T00:51:51.6653787Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-16T00:51:51.6654548Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-16T00:51:51.6655394Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-16T00:51:51.6656151Z --- FAIL: TestAccCloudUserProjectAssignment_basic (74.13s)
```

- 2026-04-17 PASS 14 seconds
- 2026-04-18 PASS 59 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 14 seconds
- 2026-04-21 PASS 56 seconds
- 2026-04-22 PASS 12 seconds
- 2026-04-23

### Error 2026-04-23T00:52:42+00:00
```
2026-04-23T00:52:42.6903059Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-23T00:52:42.6904174Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5970843345882073229
2026-04-23T00:52:42.6904985Z     resource_test.go:22: 
2026-04-23T00:52:42.6906479Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-23T00:52:42.6909687Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-23T00:52:42.6911514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-23T00:52:42.6913450Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-04-23T00:52:42.6916121Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-04-23T00:52:42.6917561Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-23T00:52:42.6918099Z         	Error:      	Received unexpected error:
2026-04-23T00:52:42.6920032Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:52:42.6921512Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-04-23T00:52:42.6923239Z         	Messages:   	Project creation failed: test-acc-tf-p-5970843345882073229, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-23T00:52:42.6924357Z --- FAIL: TestAccCloudUserProjectAssignment_basic (66.92s)
```

- 2026-04-24 PASS 12 seconds
- 2026-04-25

### Error 2026-04-25T00:47:48+00:00
```
2026-04-25T00:47:48.5559988Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-25T00:47:48.5560907Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-9068519583109382992
2026-04-25T00:47:48.5561767Z     resource_test.go:22: 
2026-04-25T00:47:48.5563471Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-25T00:47:48.5567211Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-25T00:47:48.5570653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-25T00:47:48.5572733Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-04-25T00:47:48.5575307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-04-25T00:47:48.5576544Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-25T00:47:48.5577038Z         	Error:      	Received unexpected error:
2026-04-25T00:47:48.5578961Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:47:48.5580346Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-04-25T00:47:48.5582091Z         	Messages:   	Project creation failed: test-acc-tf-p-9068519583109382992, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-25T00:47:48.5583247Z --- FAIL: TestAccCloudUserProjectAssignment_basic (63.29s)
```

- 2026-04-26: MISSING
- 2026-04-27 PASS 10 seconds
- 2026-04-28 PASS 30 seconds
- 2026-04-29 PASS 17 seconds
- 2026-04-30

### Error 2026-04-30T00:56:09+00:00
```
2026-04-30T00:56:09.4033696Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-04-30T00:56:09.4037746Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-475871775726123894
2026-04-30T00:56:09.4049643Z   
2026-04-30T00:56:09.4050035Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-04-30T00:56:09.4050397Z         
2026-04-30T00:56:09.4050778Z         Error: error creating project: 69f2a864422bb69a2c333eaf
2026-04-30T00:56:09.4051105Z         
2026-04-30T00:56:09.4051401Z           with mongodbatlas_project.test,
2026-04-30T00:56:09.4052011Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-04-30T00:56:09.4052582Z           12: 		resource "mongodbatlas_project" "test" {
2026-04-30T00:56:09.4052875Z         
2026-04-30T00:56:09.4053559Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-04-30T00:56:09.4054197Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-04-30T00:56:09.4054785Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T00:56:09.4055221Z --- FAIL: TestAccCloudUserProjectAssignment_basic (67.79s)
```

- 2026-05-01 PASS 14 seconds
- 2026-05-02 PASS 21 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 10 seconds
- 2026-05-05 PASS 52 seconds
- 2026-05-06 PASS 12 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 7 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 11 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 10 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 15 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 12 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 9 seconds
- 2026-05-04 PASS 9 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 11 seconds
