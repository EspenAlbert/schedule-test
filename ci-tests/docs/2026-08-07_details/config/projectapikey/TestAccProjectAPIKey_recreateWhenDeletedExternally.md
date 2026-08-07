# config/projectapikey/TestAccProjectAPIKey_recreateWhenDeletedExternally Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.01s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.06s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.04s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2431656Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-09T00:59:33.2432372Z     resource_project_api_key_test.go:159: Creating execution project (1): test-acc-tf-p-1464181992201257395
2026-07-09T00:59:33.2432961Z     resource_project_api_key_test.go:159: 
2026-07-09T00:59:33.2433930Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2435898Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2437772Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2439855Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:159
2026-07-09T00:59:33.2440723Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2443642Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2445138Z         	Test:       	TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-09T00:59:33.2447721Z         	Messages:   	Project creation failed: test-acc-tf-p-1464181992201257395, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2449351Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (1.12s)
```

- 2026-07-10 PASS 18 seconds
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6173708Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-11T00:55:51.6174428Z     resource_project_api_key_test.go:159: Creating execution project (1): test-acc-tf-p-944190019625543823
2026-07-11T00:55:51.6175027Z     resource_project_api_key_test.go:159: 
2026-07-11T00:55:51.6176020Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6177893Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6180155Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6182258Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:159
2026-07-11T00:55:51.6183135Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6185165Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6186459Z         	Test:       	TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-11T00:55:51.6188501Z         	Messages:   	Project creation failed: test-acc-tf-p-944190019625543823, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6189787Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (70.59s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 13 seconds
- 2026-07-14 PASS 13 seconds
- 2026-07-15 PASS 10 seconds
- 2026-07-16 PASS 12 seconds
- 2026-07-17 PASS 11 seconds
- 2026-07-18 PASS 8 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4248716Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-21T00:53:42.4249258Z     resource_project_api_key_test.go:159: Creating execution project (1): test-acc-tf-p-7481673288911542760
2026-07-21T00:53:42.4249771Z     resource_project_api_key_test.go:159: 
2026-07-21T00:53:42.4250527Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4251798Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4253066Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4254475Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:159
2026-07-21T00:53:42.4255161Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4257023Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4258065Z         	Test:       	TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-21T00:53:42.4259762Z         	Messages:   	Project creation failed: test-acc-tf-p-7481673288911542760, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4260898Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (0.42s)
```

- 2026-07-22 PASS 11 seconds
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4784258Z === RUN   TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-23T00:49:05.4785014Z     resource_project_api_key_test.go:159: Creating execution project (1): test-acc-tf-p-1579310217718628007
2026-07-23T00:49:05.4785578Z     resource_project_api_key_test.go:159: 
2026-07-23T00:49:05.4786484Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4788009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4789570Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4791345Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:159
2026-07-23T00:49:05.4792133Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4794442Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4795724Z         	Test:       	TestAccProjectAPIKey_recreateWhenDeletedExternally
2026-07-23T00:49:05.4797659Z         	Messages:   	Project creation failed: test-acc-tf-p-1579310217718628007, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4798980Z --- FAIL: TestAccProjectAPIKey_recreateWhenDeletedExternally (0.48s)
```

- 2026-07-24 PASS 16 seconds
- 2026-07-25 PASS 8 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 33 seconds
- 2026-07-28 PASS 9 seconds
- 2026-07-29 PASS 11 seconds
- 2026-07-30 PASS 7 seconds
- 2026-07-31 PASS 13 seconds
- 2026-08-01 PASS 5 seconds
- 2026-08-02: MISSING
- 2026-08-03 PASS 6 seconds
- 2026-08-04 PASS 8 seconds
- 2026-08-05 PASS 8 seconds
- 2026-08-06 PASS 5 seconds
- 2026-08-07 PASS 16 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 9 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 10 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 9 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 8 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 4 seconds
  - PASS 6 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 14 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
