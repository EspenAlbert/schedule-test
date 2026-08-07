# config/projectapikey/TestAccProjectAPIKey_duplicateProject Test Details
# Found 32 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 28) FAIL(x 4)
Success rate: 87.50%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 00:59](#error-2026-07-09t0059330000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 1.00s
[2026-07-11 00:55](#error-2026-07-11t0055510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.09s
[2026-07-21 00:53](#error-2026-07-21t0053420000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.06s
[2026-07-23 00:49](#error-2026-07-23t0049050000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev |  | 0.05s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T00:59:33+00:00
```
2026-07-09T00:59:33.2413496Z === RUN   TestAccProjectAPIKey_duplicateProject
2026-07-09T00:59:33.2414169Z     resource_project_api_key_test.go:139: Creating execution project (1): test-acc-tf-p-930010112706536660
2026-07-09T00:59:33.2414759Z     resource_project_api_key_test.go:139: 
2026-07-09T00:59:33.2415834Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T00:59:33.2417696Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T00:59:33.2419679Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T00:59:33.2421759Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:139
2026-07-09T00:59:33.2422627Z         	Error:      	Received unexpected error:
2026-07-09T00:59:33.2425760Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2427213Z         	Test:       	TestAccProjectAPIKey_duplicateProject
2026-07-09T00:59:33.2429631Z         	Messages:   	Project creation failed: test-acc-tf-p-930010112706536660, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-09T00:59:33.2431218Z --- FAIL: TestAccProjectAPIKey_duplicateProject (1.04s)
```

- 2026-07-10 PASS a second
- 2026-07-11

### Error 2026-07-11T00:55:51+00:00
```
2026-07-11T00:55:51.6157635Z === RUN   TestAccProjectAPIKey_duplicateProject
2026-07-11T00:55:51.6158603Z     resource_project_api_key_test.go:139: Creating execution project (1): test-acc-tf-p-7537762249792385386
2026-07-11T00:55:51.6159202Z     resource_project_api_key_test.go:139: 
2026-07-11T00:55:51.6160180Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T00:55:51.6162048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T00:55:51.6163912Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T00:55:51.6166009Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:139
2026-07-11T00:55:51.6166887Z         	Error:      	Received unexpected error:
2026-07-11T00:55:51.6169116Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6170196Z         	Test:       	TestAccProjectAPIKey_duplicateProject
2026-07-11T00:55:51.6172025Z         	Messages:   	Project creation failed: test-acc-tf-p-7537762249792385386, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T00:55:51.6173261Z --- FAIL: TestAccProjectAPIKey_duplicateProject (63.89s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS a second
- 2026-07-14 PASS a second
- 2026-07-15 PASS a second
- 2026-07-16 PASS a moment
- 2026-07-17 PASS a second
- 2026-07-18 PASS 20 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:53:42+00:00
```
2026-07-21T00:53:42.4236212Z === RUN   TestAccProjectAPIKey_duplicateProject
2026-07-21T00:53:42.4236734Z     resource_project_api_key_test.go:139: Creating execution project (1): test-acc-tf-p-8851442297462701654
2026-07-21T00:53:42.4237232Z     resource_project_api_key_test.go:139: 
2026-07-21T00:53:42.4237947Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:53:42.4239335Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:53:42.4240550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:53:42.4241932Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:139
2026-07-21T00:53:42.4242581Z         	Error:      	Received unexpected error:
2026-07-21T00:53:42.4244474Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4245448Z         	Test:       	TestAccProjectAPIKey_duplicateProject
2026-07-21T00:53:42.4247104Z         	Messages:   	Project creation failed: test-acc-tf-p-8851442297462701654, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-21T00:53:42.4248190Z --- FAIL: TestAccProjectAPIKey_duplicateProject (0.58s)
```

- 2026-07-22 PASS a second
- 2026-07-23

### Error 2026-07-23T00:49:05+00:00
```
2026-07-23T00:49:05.4768342Z === RUN   TestAccProjectAPIKey_duplicateProject
2026-07-23T00:49:05.4769040Z     resource_project_api_key_test.go:139: Creating execution project (1): test-acc-tf-p-8920276379037324955
2026-07-23T00:49:05.4769635Z     resource_project_api_key_test.go:139: 
2026-07-23T00:49:05.4770527Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-23T00:49:05.4772199Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-23T00:49:05.4773770Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-23T00:49:05.4776057Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/projectapikey/resource_project_api_key_test.go:139
2026-07-23T00:49:05.4776892Z         	Error:      	Received unexpected error:
2026-07-23T00:49:05.4779234Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4780490Z         	Test:       	TestAccProjectAPIKey_duplicateProject
2026-07-23T00:49:05.4782452Z         	Messages:   	Project creation failed: test-acc-tf-p-8920276379037324955, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-07-23T00:49:05.4783771Z --- FAIL: TestAccProjectAPIKey_duplicateProject (0.51s)
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
