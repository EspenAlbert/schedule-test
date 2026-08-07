# config/projectapikey/TestAccProjectAPIKey_updateRole Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.03s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.00s
[2026-07-18 00:51](#error-2026-07-18t0051550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.06s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.07s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2395810Z === RUN   TestAccProjectAPIKey_updateRole
2026-07-09T00:59:33.2396465Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-3180660570993249429
2026-07-09T00:59:33.2397059Z     resource_project_api_key_test.go:116: 
2026-07-09T00:59:33.2398025Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2399882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2401742Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2403819Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-07-09T00:59:33.2404687Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2407735Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2409148Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-07-09T00:59:33.2411554Z         	Messages:   	Project creation failed: test-acc-tf-p-3180660570993249429, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2413120Z --- FAIL: TestAccProjectAPIKey_updateRole (1.26s)
```

- 2026-07-10 PASS 27 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6141941Z === RUN   TestAccProjectAPIKey_updateRole
2026-07-11T00:55:51.6142604Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-7474342516377644066
2026-07-11T00:55:51.6143195Z     resource_project_api_key_test.go:116: 
2026-07-11T00:55:51.6144178Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6146055Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6148039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6150143Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-07-11T00:55:51.6151171Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6153186Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6154238Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-07-11T00:55:51.6156056Z         	Messages:   	Project creation failed: test-acc-tf-p-7474342516377644066, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6157249Z --- FAIL: TestAccProjectAPIKey_updateRole (62.04s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14 PASS 20 seconds
- 2026-07-15 PASS 15 seconds
- 2026-07-16 PASS 17 seconds
- 2026-07-17 PASS 14 seconds
- 2026-07-18

### Error 2026-07-18T00:51:55+00:00
```
2026-07-18T00:51:55.3259107Z === RUN   TestAccProjectAPIKey_updateRole
2026-07-18T00:51:55.3260287Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-6911537809151900880
2026-07-18T00:51:55.3261330Z     resource_project_api_key_test.go:116: 
2026-07-18T00:51:55.3263346Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:55.3266610Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:55.3270054Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:55.3274216Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-07-18T00:51:55.3275787Z         	Error:      	Received unexpected error:
2026-07-18T00:51:55.3279712Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3281568Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-07-18T00:51:55.3285007Z         	Messages:   	Project creation failed: test-acc-tf-p-6911537809151900880, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3287111Z --- FAIL: TestAccProjectAPIKey_updateRole (62.63s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4224300Z === RUN   TestAccProjectAPIKey_updateRole
2026-07-21T00:53:42.4224722Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-4209629673333521251
2026-07-21T00:53:42.4225106Z     resource_project_api_key_test.go:116: 
2026-07-21T00:53:42.4225722Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4226860Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4228214Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4229725Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-07-21T00:53:42.4230401Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4232255Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4233225Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-07-21T00:53:42.4234798Z         	Messages:   	Project creation failed: test-acc-tf-p-4209629673333521251, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4235873Z --- FAIL: TestAccProjectAPIKey_updateRole (0.73s)
```

- 2026-07-22 PASS 15 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4752928Z === RUN   TestAccProjectAPIKey_updateRole
2026-07-23T00:49:05.4753605Z     resource_project_api_key_test.go:116: Creating execution project (1): test-acc-tf-p-7713570749721610027
2026-07-23T00:49:05.4754270Z     resource_project_api_key_test.go:116: 
2026-07-23T00:49:05.4755126Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4756721Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4758342Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4760111Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:116
2026-07-23T00:49:05.4761025Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4763356Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4764561Z         	Test:       	TestAccProjectAPIKey_updateRole
2026-07-23T00:49:05.4766584Z         	Messages:   	Project creation failed: test-acc-tf-p-7713570749721610027, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4767882Z --- FAIL: TestAccProjectAPIKey_updateRole (0.22s)
```

- 2026-07-24 PASS 22 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 55 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 10 seconds
- 2026-07-31 PASS 18 seconds
- 2026-08-01 PASS 7 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 10 seconds
- 2026-08-04 PASS 11 seconds
- 2026-08-05 PASS 10 seconds
- 2026-08-06 PASS 7 seconds
- 2026-08-07 PASS 23 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 13 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 14 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 12 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 10 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 6 seconds
  - PASS 9 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 21 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
