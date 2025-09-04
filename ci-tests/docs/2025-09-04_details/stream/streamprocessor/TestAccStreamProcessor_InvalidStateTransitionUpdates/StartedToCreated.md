# stream/streamprocessor/TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated Test Details
# Found 42 TestRuns in dev, qa from 2025-08-06 to 2025-09-04 from master branch: 1 unique tests, PASS(x 41) FAIL
Success rate: 97.62%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-09-01 00:30](#error-2025-09-01t0030380000) | MAX_GROUPS_PER_ORG_EXCEEDED /api/atlas/v2/groups | dev | 0.02s

## Timeline
- 2025-08-05: MISSING
- 2025-08-06 PASS 6 seconds
- 2025-08-07
  - PASS 34 seconds
  - PASS 7 seconds
- 2025-08-08 PASS 5 seconds
- 2025-08-09 PASS 5 seconds
- 2025-08-10 PASS 6 seconds
- 2025-08-11 PASS 6 seconds
- 2025-08-12
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-13 PASS 6 seconds
- 2025-08-14 PASS 5 seconds
- 2025-08-15 PASS 6 seconds
- 2025-08-16 PASS 5 seconds
- 2025-08-17 PASS 5 seconds
- 2025-08-18
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-19 PASS 6 seconds
- 2025-08-20
  - PASS 6 seconds
  - PASS 6 seconds
- 2025-08-21 PASS 6 seconds
- 2025-08-22 PASS 6 seconds
- 2025-08-23 PASS 6 seconds
- 2025-08-24 PASS 6 seconds
- 2025-08-25 PASS 6 seconds
- 2025-08-26 PASS 5 seconds
- 2025-08-27 PASS 7 seconds
- 2025-08-28 PASS 6 seconds
- 2025-08-29
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-08-30 PASS 6 seconds
- 2025-08-31 PASS 6 seconds
- 2025-09-01
  - FAIL a moment

### Error 2025-09-01T00:30:38+00:00
```
2025-09-01T00:30:38.9725522Z === RUN   TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-01T00:30:38.9727013Z     resource_test.go:258: Testing: Verifies a processor cannot transition from STARTED to CREATED state
2025-09-01T00:30:38.9728328Z     resource_test.go:259: Creating execution project: test-acc-tf-p-3725847818863061905
2025-09-01T00:30:38.9729128Z     resource_test.go:259: 
2025-09-01T00:30:38.9730736Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:22
2025-09-01T00:30:38.9734020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:77
2025-09-01T00:30:38.9737520Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:150
2025-09-01T00:30:38.9741235Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:362
2025-09-01T00:30:38.9744810Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:259
2025-09-01T00:30:38.9747131Z         	            				/opt/hostedtoolcache/go/1.24.6/x64/src/runtime/asm_amd64.s:1700
2025-09-01T00:30:38.9748006Z         	Error:      	Received unexpected error:
2025-09-01T00:30:38.9753049Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9755740Z         	Test:       	TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated
2025-09-01T00:30:38.9760211Z         	Messages:   	Project creation failed: test-acc-tf-p-3725847818863061905, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 400 Bad Request (Error code: "MAX_GROUPS_PER_ORG_EXCEEDED") Detail: Maximum number of groups per organization (250) in 64808d5f33a0c71e882ef19c exceeded while trying to add group. Reason: Bad Request. Params: [250 64808d5f33a0c71e882ef19c], BadRequestDetail: 
2025-09-01T00:30:38.9766823Z     --- FAIL: TestAccStreamProcessor_InvalidStateTransitionUpdates/StartedToCreated (0.16s)
```

  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-09-02 PASS 6 seconds
- 2025-09-03 PASS 6 seconds
- 2025-09-04 PASS 6 seconds