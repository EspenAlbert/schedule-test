# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 34) FAIL
Success rate: 97.14%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-05-28 02:40](#error-2026-05-28t0240170000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 2.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 8 seconds
  - PASS 6 seconds
- 2026-05-08 PASS 6 seconds
- 2026-05-09
  - PASS 6 seconds
  - PASS 8 seconds
- 2026-05-10: MISSING
- 2026-05-11 PASS 5 seconds
- 2026-05-12 PASS 6 seconds
- 2026-05-13 PASS 8 seconds
- 2026-05-14 PASS 6 seconds
- 2026-05-15 PASS 5 seconds
- 2026-05-16 PASS 8 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 6 seconds
- 2026-05-19 PASS 6 seconds
- 2026-05-20
  - PASS 8 seconds
  - PASS 6 seconds
- 2026-05-21 PASS 8 seconds
- 2026-05-22 PASS 6 seconds
- 2026-05-23 PASS 6 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 6 seconds
- 2026-05-26 PASS 7 seconds
- 2026-05-27 PASS 8 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5591875Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-05-28T02:40:17.5592650Z     resource_test.go:307: Testing: Verifies a processor cannot transition from STOPPED to CREATED state
2026-05-28T02:40:17.5593421Z     resource_test.go:308: Creating execution project (1): test-acc-tf-p-2745871480284095496
2026-05-28T02:40:17.5593921Z     resource_test.go:308: 
2026-05-28T02:40:17.5594837Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5596783Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5598849Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5600656Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-28T02:40:17.5602532Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:436
2026-05-28T02:40:17.5604779Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:308
2026-05-28T02:40:17.5605612Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5609104Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5610990Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated
2026-05-28T02:40:17.5613869Z         	Messages:   	Project creation failed: test-acc-tf-p-2745871480284095496, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2026-05-28T02:40:17.5642590Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StoppedToCreated (2.32s)
```

- 2026-05-29 PASS 8 seconds
- 2026-05-30 PASS 6 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02 PASS 8 seconds
- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 8 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 6 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 6 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25 PASS 8 seconds
- 2026-05-26 PASS 7 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 6 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
