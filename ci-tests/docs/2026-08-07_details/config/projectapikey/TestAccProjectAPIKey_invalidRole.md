# config/projectapikey/TestAccProjectAPIKey_invalidRole Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.03s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | flaky_500 | 0.04s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.02s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2468139Z === RUN   TestAccProjectAPIKey_invalidRole
2026-07-09T00:59:33.2468798Z     resource_project_api_key_test.go:237: Creating execution project (1): test-acc-tf-p-4599537289892548033
2026-07-09T00:59:33.2469383Z     resource_project_api_key_test.go:237: 
2026-07-09T00:59:33.2470345Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2472200Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2474052Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2476240Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:237
2026-07-09T00:59:33.2477118Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2480043Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2481465Z         	Test:       	TestAccProjectAPIKey_invalidRole
2026-07-09T00:59:33.2483879Z         	Messages:   	Project creation failed: test-acc-tf-p-4599537289892548033, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2485548Z --- FAIL: TestAccProjectAPIKey_invalidRole (1.02s)
```

- 2026-07-10 PASS a second
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6215179Z === RUN   TestAccProjectAPIKey_invalidRole
2026-07-11T00:55:51.6215846Z     resource_project_api_key_test.go:237: Creating execution project (1): test-acc-tf-p-2187929781098187932
2026-07-11T00:55:51.6216439Z     resource_project_api_key_test.go:237: 
2026-07-11T00:55:51.6217416Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6219420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6221301Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6223393Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:237
2026-07-11T00:55:51.6224273Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6227222Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.6228745Z         	Test:       	TestAccProjectAPIKey_invalidRole
2026-07-11T00:55:51.6231166Z         	Messages:   	Project creation failed: test-acc-tf-p-2187929781098187932, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-11T00:55:51.6232850Z --- FAIL: TestAccProjectAPIKey_invalidRole (0.25s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS a second
- 2026-07-15 PASS a second
- 2026-07-16 PASS a second
- 2026-07-17 PASS a second
- 2026-07-18 PASS a second
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4273931Z === RUN   TestAccProjectAPIKey_invalidRole
2026-07-21T00:53:42.4274450Z     resource_project_api_key_test.go:237: Creating execution project (1): test-acc-tf-p-6250558901155872331
2026-07-21T00:53:42.4274955Z     resource_project_api_key_test.go:237: 
2026-07-21T00:53:42.4275807Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4277069Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4278412Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4279867Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:237
2026-07-21T00:53:42.4280560Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4282407Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4283425Z         	Test:       	TestAccProjectAPIKey_invalidRole
2026-07-21T00:53:42.4285001Z         	Messages:   	Project creation failed: test-acc-tf-p-6250558901155872331, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4286098Z --- FAIL: TestAccProjectAPIKey_invalidRole (0.42s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4814711Z === RUN   TestAccProjectAPIKey_invalidRole
2026-07-23T00:49:05.4815355Z     resource_project_api_key_test.go:237: Creating execution project (1): test-acc-tf-p-2275579787308301111
2026-07-23T00:49:05.4815927Z     resource_project_api_key_test.go:237: 
2026-07-23T00:49:05.4816834Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4818344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4819880Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4821609Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:237
2026-07-23T00:49:05.4822433Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4824755Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4825936Z         	Test:       	TestAccProjectAPIKey_invalidRole
2026-07-23T00:49:05.4827828Z         	Messages:   	Project creation failed: test-acc-tf-p-2275579787308301111, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4829114Z --- FAIL: TestAccProjectAPIKey_invalidRole (0.17s)
```

- 2026-07-24 PASS a second
- 2026-07-25 PASS a second
- 2026-07-26: MISSING
- 2026-07-27 PASS a second
- 2026-07-28 PASS a second
- 2026-07-29 PASS a second
- 2026-07-30 PASS a second
- 2026-07-31 PASS a second
- 2026-08-01 PASS a second
- 2026-08-02: MISSING
- 2026-08-03 PASS a second
- 2026-08-04 PASS a second
- 2026-08-05 PASS a second
- 2026-08-06 PASS a second
- 2026-08-07 PASS a second

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS a second
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS a second
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS a second
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS a second
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS a second
  - PASS a second
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS a second
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
