# config/projectapikey/TestAccProjectAPIKey_updateDescription Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 27) FAIL(x 5)
Success rate: 84.38%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.08s
[2026-07-18 00:51](#error-2026-07-18t0051550000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 81.08s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.05s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2377717Z === RUN   TestAccProjectAPIKey_updateDescription
2026-07-09T00:59:33.2378375Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-2239158321559409128
2026-07-09T00:59:33.2378954Z     resource_project_api_key_test.go:92: 
2026-07-09T00:59:33.2379922Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2381775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2383761Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2385947Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-07-09T00:59:33.2386815Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2389847Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2391291Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-07-09T00:59:33.2393714Z         	Messages:   	Project creation failed: test-acc-tf-p-2239158321559409128, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2395421Z --- FAIL: TestAccProjectAPIKey_updateDescription (1.05s)
```

- 2026-07-10 PASS 26 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6125835Z === RUN   TestAccProjectAPIKey_updateDescription
2026-07-11T00:55:51.6126697Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-3509885862831804160
2026-07-11T00:55:51.6127291Z     resource_project_api_key_test.go:92: 
2026-07-11T00:55:51.6128527Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6130412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6132290Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6134378Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-07-11T00:55:51.6135255Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6137266Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6138470Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-07-11T00:55:51.6140312Z         	Messages:   	Project creation failed: test-acc-tf-p-3509885862831804160, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6141546Z --- FAIL: TestAccProjectAPIKey_updateDescription (61.84s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 18 seconds
- 2026-07-14 PASS 19 seconds
- 2026-07-15 PASS 15 seconds
- 2026-07-16 PASS a minute
- 2026-07-17 PASS 15 seconds
- 2026-07-18

### Error 2026-07-18T00:51:55+00:00
```
2026-07-18T00:51:55.3230262Z === RUN   TestAccProjectAPIKey_updateDescription
2026-07-18T00:51:55.3231459Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-8292481212681802969
2026-07-18T00:51:55.3232664Z     resource_project_api_key_test.go:92: 
2026-07-18T00:51:55.3234414Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-18T00:51:55.3237847Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-18T00:51:55.3241284Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-18T00:51:55.3245694Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-07-18T00:51:55.3247323Z         	Error:      	Received unexpected error:
2026-07-18T00:51:55.3250964Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3253056Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-07-18T00:51:55.3256299Z         	Messages:   	Project creation failed: test-acc-tf-p-8292481212681802969, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-18T00:51:55.3258402Z --- FAIL: TestAccProjectAPIKey_updateDescription (81.80s)
```

- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4214474Z === RUN   TestAccProjectAPIKey_updateDescription
2026-07-21T00:53:42.4214926Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-6298645251504273205
2026-07-21T00:53:42.4215363Z     resource_project_api_key_test.go:92: 
2026-07-21T00:53:42.4215979Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4217137Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4218364Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4219652Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-07-21T00:53:42.4220215Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4221435Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4222103Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-07-21T00:53:42.4223265Z         	Messages:   	Project creation failed: test-acc-tf-p-6298645251504273205, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:53:42.4224025Z --- FAIL: TestAccProjectAPIKey_updateDescription (62.46s)
```

- 2026-07-22 PASS 15 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4738196Z === RUN   TestAccProjectAPIKey_updateDescription
2026-07-23T00:49:05.4738837Z     resource_project_api_key_test.go:92: Creating execution project (1): test-acc-tf-p-8402955644837902369
2026-07-23T00:49:05.4739378Z     resource_project_api_key_test.go:92: 
2026-07-23T00:49:05.4740224Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4741780Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4743285Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4744930Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:92
2026-07-23T00:49:05.4745684Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4747953Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4749117Z         	Test:       	TestAccProjectAPIKey_updateDescription
2026-07-23T00:49:05.4751153Z         	Messages:   	Project creation failed: test-acc-tf-p-8402955644837902369, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4752460Z --- FAIL: TestAccProjectAPIKey_updateDescription (0.35s)
```

- 2026-07-24 PASS 22 seconds
- 2026-07-25 PASS 12 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 53 seconds
- 2026-07-28 PASS 12 seconds
- 2026-07-29 PASS 14 seconds
- 2026-07-30 PASS 9 seconds
- 2026-07-31 PASS 19 seconds
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
- 2026-08-02 PASS 20 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
