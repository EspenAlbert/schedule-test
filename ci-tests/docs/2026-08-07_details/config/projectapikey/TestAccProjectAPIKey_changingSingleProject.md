# config/projectapikey/TestAccProjectAPIKey_changingSingleProject Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 26) FAIL(x 6)
Success rate: 81.25%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 89.00s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 86.10s
[2026-07-16 00:49](#error-2026-07-16t0049140000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 79.08s
[2026-07-18 00:51](#error-2026-07-18t0051550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.00s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2361984Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-07-09T00:59:33.2362668Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-5016706359118957607
2026-07-09T00:59:33.2363246Z     resource_project_api_key_test.go:60: 
2026-07-09T00:59:33.2364206Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2366174Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2368037Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2370104Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-07-09T00:59:33.2370970Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2372985Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2374101Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-07-09T00:59:33.2376043Z         	Messages:   	Project creation failed: test-acc-tf-p-5016706359118957607, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T00:59:33.2377285Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (89.04s)
```

- 2026-07-10 PASS 59 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6109779Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-07-11T00:55:51.6110468Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-3913505823866031829
2026-07-11T00:55:51.6111050Z     resource_project_api_key_test.go:60: 
2026-07-11T00:55:51.6112023Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6113899Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6115959Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6118202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-07-11T00:55:51.6119079Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6121096Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6122195Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-07-11T00:55:51.6124154Z         	Messages:   	Project creation failed: test-acc-tf-p-3913505823866031829, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6125407Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (86.99s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 43 seconds
- 2026-07-14 PASS 45 seconds
- 2026-07-15 PASS 32 seconds
- 2026-07-16

### Error 2026-07-16T00:49:14+00:00
```
2026-07-16T00:49:14.1158488Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-07-16T00:49:14.1159194Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-6058695767091432965
2026-07-16T00:49:14.1159785Z     resource_project_api_key_test.go:60: 
2026-07-16T00:49:14.1160732Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-16T00:49:14.1162988Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-16T00:49:14.1164757Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-16T00:49:14.1166700Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-07-16T00:49:14.1167565Z         	Error:      	Received unexpected error:
2026-07-16T00:49:14.1169650Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1170712Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-07-16T00:49:14.1172713Z         	Messages:   	Project creation failed: test-acc-tf-p-6058695767091432965, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-16T00:49:14.1173935Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (79.82s)
```

- 2026-07-17 PASS 34 seconds
- 2026-07-18

### Error 2026-07-18T00:51:55+00:00
```
2026-07-18T00:51:55.3201525Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-07-18T00:51:55.3202914Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-2514593920330696099
2026-07-18T00:51:55.3203906Z     resource_project_api_key_test.go:60: 
2026-07-18T00:51:55.3205631Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:55.3209043Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:55.3212923Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:55.3216593Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-07-18T00:51:55.3218163Z         	Error:      	Received unexpected error:
2026-07-18T00:51:55.3221753Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3223987Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-07-18T00:51:55.3227330Z         	Messages:   	Project creation failed: test-acc-tf-p-2514593920330696099, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3229511Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (66.60s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4204716Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-07-21T00:53:42.4205159Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-3162220414016174437
2026-07-21T00:53:42.4205539Z     resource_project_api_key_test.go:60: 
2026-07-21T00:53:42.4206202Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4207369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4208592Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4209860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-07-21T00:53:42.4210417Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4211622Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4212298Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-07-21T00:53:42.4213416Z         	Messages:   	Project creation failed: test-acc-tf-p-3162220414016174437, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4214182Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (100.00s)
```

- 2026-07-22 PASS 36 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4723435Z === RUN   TestAccProjectAPIKey_changingSingleProject
2026-07-23T00:49:05.4724046Z     resource_project_api_key_test.go:60: Creating execution project (1): test-acc-tf-p-6231911045090890717
2026-07-23T00:49:05.4724698Z     resource_project_api_key_test.go:60: 
2026-07-23T00:49:05.4725550Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4727040Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4728514Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4730176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:60
2026-07-23T00:49:05.4731156Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4733408Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4734565Z         	Test:       	TestAccProjectAPIKey_changingSingleProject
2026-07-23T00:49:05.4736506Z         	Messages:   	Project creation failed: test-acc-tf-p-6231911045090890717, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4737740Z --- FAIL: TestAccProjectAPIKey_changingSingleProject (0.49s)
```

- 2026-07-24 PASS 46 seconds
- 2026-07-25 PASS 28 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS a minute
- 2026-07-28 PASS 29 seconds
- 2026-07-29 PASS 32 seconds
- 2026-07-30 PASS 24 seconds
- 2026-07-31 PASS 40 seconds
- 2026-08-01 PASS 19 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 19 seconds
- 2026-08-04 PASS 26 seconds
- 2026-08-05 PASS 24 seconds
- 2026-08-06 PASS 19 seconds
- 2026-08-07 PASS 49 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 30 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 32 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 29 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 22 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 15 seconds
  - PASS 21 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 45 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
