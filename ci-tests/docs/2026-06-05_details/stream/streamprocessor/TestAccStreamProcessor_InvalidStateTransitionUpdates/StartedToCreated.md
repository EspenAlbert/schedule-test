# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 1.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 4 seconds
- 2026-05-09
  - PASS 4 seconds
  - PASS 5 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 4 seconds
- 2026-05-13 PASS 5 seconds
- 2026-05-14 PASS 5 seconds
- 2026-05-15 PASS 4 seconds
- 2026-05-16 PASS 5 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 4 seconds
- 2026-05-19 PASS 5 seconds
- 2026-05-20
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-21 PASS 5 seconds
- 2026-05-22 PASS 4 seconds
- 2026-05-23 PASS 4 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 4 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5615850Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-05-28T02:40:17.5616780Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2026-05-28T02:40:17.5617874Z     resource_test.go:308: Creating execution project (1): test-acc-tf-p-8766619745553565121
2026-05-28T02:40:17.5618387Z     resource_test.go:308: 
2026-05-28T02:40:17.5619459Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5621550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5623623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5625441Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5627698Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5629865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:308
2026-05-28T02:40:17.5630833Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5633950Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5635794Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2026-05-28T02:40:17.5638802Z         	Messages:   	Project creation failed: test-acc-tf-p-8766619745553565121, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5643328Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (1.61s)
```

- 2026-05-29 PASS 5 seconds
- 2026-05-30 PASS 5 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02 PASS 5 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 4 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 4 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 5 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 4 seconds
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS 5 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 4 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
