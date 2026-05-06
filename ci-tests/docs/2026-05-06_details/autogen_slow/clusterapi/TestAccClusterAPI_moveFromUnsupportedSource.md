# autogen_slow/clusterapi/TestAccClusterAPI_moveFromUnsupportedSource Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL
Success rate: 97.06%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:00](#error-2026-04-30t0100090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.08s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 seconds
- 2026-04-08 PASS 2 seconds
- 2026-04-09 PASS 3 seconds
- 2026-04-10 PASS 2 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 3 seconds
- 2026-04-14 PASS 42 seconds
- 2026-04-15 PASS 3 seconds
- 2026-04-16 PASS 4 seconds
- 2026-04-17 PASS 2 seconds
- 2026-04-18 PASS 26 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 3 seconds
- 2026-04-21 PASS 43 seconds
- 2026-04-22 PASS 3 seconds
- 2026-04-23 PASS 3 seconds
- 2026-04-24 PASS 3 seconds
- 2026-04-25 PASS 24 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 seconds
- 2026-04-28 PASS 4 seconds
- 2026-04-29 PASS 3 seconds
- 2026-04-30

### Error 2026-04-30T01:00:09+00:00
```
2026-04-30T01:00:09.4719082Z === RUN   TestAccClusterAPI_moveFromUnsupportedSource
2026-04-30T01:00:09.4719994Z     move_test.go:43: Creating execution project (1): test-acc-tf-p-1013615728173644152
2026-04-30T01:00:09.4720869Z     move_test.go:43: 
2026-04-30T01:00:09.4722068Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:00:09.4723865Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:00:09.4725674Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:00:09.4728007Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/clusterapi/move_test.go:43
2026-04-30T01:00:09.4728789Z         	Error:      	Received unexpected error:
2026-04-30T01:00:09.4730725Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4731826Z         	Test:       	TestAccClusterAPI_moveFromUnsupportedSource
2026-04-30T01:00:09.4733620Z         	Messages:   	Project creation failed: test-acc-tf-p-1013615728173644152, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:00:09.4734834Z --- FAIL: TestAccClusterAPI_moveFromUnsupportedSource (66.78s)
```

- 2026-05-01 PASS 3 seconds
- 2026-05-02 PASS 3 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 3 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 3 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 2 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 2 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 2 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 3 seconds
- 2026-05-04 PASS 3 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 2 seconds
