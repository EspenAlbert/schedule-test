# cloud_user/clouduserprojectassignment/TestAccCloudUserProjectAssignment_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 25) FAIL(x 5)
Success rate: 83.33%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056480000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.02s
[2026-05-21 01:05](#error-2026-05-21t0105030000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.07s
[2026-05-28 00:59](#error-2026-05-28t0059160000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s
[2026-05-30 01:02](#error-2026-05-30t0102270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-06-02 01:10](#error-2026-06-02t0110150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.05s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS a minute
- 2026-05-08 PASS 15 seconds
- 2026-05-09

### Error 2026-05-09T00:56:48+00:00
```
2026-05-09T00:56:48.0634144Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-05-09T00:56:48.0635484Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-3131417409750890261
2026-05-09T00:56:48.0657155Z    test_name=TestAccCloudUserProjectAssignment_basic test_terraform_path=/home/runner/work/_temp/0b48939f-01ca-486d-a617-f7d623b3210f/terraform
2026-05-09T00:56:48.0658747Z     resource_test.go:22: Step 1/6 error: Error running apply: exit status 1
2026-05-09T00:56:48.0659394Z         
2026-05-09T00:56:48.0660037Z         Error: error creating project: 69fe85e1987d495692ee0562
2026-05-09T00:56:48.0660595Z         
2026-05-09T00:56:48.0661110Z           with mongodbatlas_project.test,
2026-05-09T00:56:48.0662225Z           on terraform_plugin_test.tf line 12, in resource "mongodbatlas_project" "test":
2026-05-09T00:56:48.0663253Z           12: 		resource "mongodbatlas_project" "test" {
2026-05-09T00:56:48.0663783Z         
2026-05-09T00:56:48.0664598Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal
2026-05-09T00:56:48.0666323Z         Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error.
2026-05-09T00:56:48.0667437Z         Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:48.0668225Z --- FAIL: TestAccCloudUserProjectAssignment_basic (109.22s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 23 seconds
- 2026-05-13 PASS 11 seconds
- 2026-05-14 PASS 47 seconds
- 2026-05-15 PASS 11 seconds
- 2026-05-16 PASS 26 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19 PASS 30 seconds
- 2026-05-20 PASS 10 seconds
- 2026-05-21

### Error 2026-05-21T01:05:03+00:00
```
2026-05-21T01:05:03.4596361Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-05-21T01:05:03.4597525Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-2300871652871931801
2026-05-21T01:05:03.4598304Z     resource_test.go:22: 
2026-05-21T01:05:03.4599643Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:05:03.4602608Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:05:03.4605653Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:05:03.4608893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-05-21T01:05:03.4611777Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-05-21T01:05:03.4612994Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-21T01:05:03.4613614Z         	Error:      	Received unexpected error:
2026-05-21T01:05:03.4615372Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:03.4616548Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-05-21T01:05:03.4618198Z         	Messages:   	Project creation failed: test-acc-tf-p-2300871652871931801, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:05:03.4619629Z --- FAIL: TestAccCloudUserProjectAssignment_basic (61.66s)
```

- 2026-05-22 PASS 11 seconds
- 2026-05-23 PASS a minute
- 2026-05-24: MISSING
- 2026-05-25 PASS 11 seconds
- 2026-05-26 PASS 33 seconds
- 2026-05-27 PASS 12 seconds
- 2026-05-28

### Error 2026-05-28T00:59:16+00:00
```
2026-05-28T00:59:16.1676923Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-05-28T00:59:16.1678236Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-2314677206502700275
2026-05-28T00:59:16.1679014Z     resource_test.go:22: 
2026-05-28T00:59:16.1680735Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T00:59:16.1684570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T00:59:16.1688245Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T00:59:16.1692268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-05-28T00:59:16.1694961Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-05-28T00:59:16.1696530Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-28T00:59:16.1697040Z         	Error:      	Received unexpected error:
2026-05-28T00:59:16.1699227Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:16.1700315Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-05-28T00:59:16.1702346Z         	Messages:   	Project creation failed: test-acc-tf-p-2314677206502700275, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T00:59:16.1703539Z --- FAIL: TestAccCloudUserProjectAssignment_basic (66.03s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30

### Error 2026-05-30T01:02:27+00:00
```
2026-05-30T01:02:27.4117497Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-05-30T01:02:27.4120385Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-8534175649554928250
2026-05-30T01:02:27.4121269Z     resource_test.go:22: 
2026-05-30T01:02:27.4122551Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:02:27.4124618Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:02:27.4126429Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:02:27.4128496Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-05-30T01:02:27.4130605Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-05-30T01:02:27.4131864Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T01:02:27.4132405Z         	Error:      	Received unexpected error:
2026-05-30T01:02:27.4134584Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:27.4135827Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-05-30T01:02:27.4137701Z         	Messages:   	Project creation failed: test-acc-tf-p-8534175649554928250, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:02:27.4139195Z --- FAIL: TestAccCloudUserProjectAssignment_basic (61.76s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 11 seconds
- 2026-06-02

### Error 2026-06-02T01:10:15+00:00
```
2026-06-02T01:10:15.2830729Z === RUN   TestAccCloudUserProjectAssignment_basic
2026-06-02T01:10:15.2832721Z     resource_test.go:22: Creating execution project (1): test-acc-tf-p-5342592766287622684
2026-06-02T01:10:15.2835052Z     resource_test.go:22: 
2026-06-02T01:10:15.2836786Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:10:15.2840242Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:10:15.2843756Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:10:15.2848004Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:37
2026-06-02T01:10:15.2851406Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/clouduserprojectassignment/resource_test.go:22
2026-06-02T01:10:15.2852861Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:10:15.2853476Z         	Error:      	Received unexpected error:
2026-06-02T01:10:15.2855635Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:15.2857178Z         	Test:       	TestAccCloudUserProjectAssignment_basic
2026-06-02T01:10:15.2859468Z         	Messages:   	Project creation failed: test-acc-tf-p-5342592766287622684, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:10:15.2860857Z --- FAIL: TestAccCloudUserProjectAssignment_basic (63.53s)
```

- 2026-06-03 PASS 12 seconds
- 2026-06-04 PASS 23 seconds
- 2026-06-05 PASS 9 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 16 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 9 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 11 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
