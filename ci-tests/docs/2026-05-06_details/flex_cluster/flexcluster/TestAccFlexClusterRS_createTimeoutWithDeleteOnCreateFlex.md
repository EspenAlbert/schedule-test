# flex_cluster/flexcluster/TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex Test Details
# Found 36 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 35) FAIL
Success rate: 97.22%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:45](#error-2026-04-11t0045320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 2 seconds
- 2026-04-08 PASS 2 seconds
- 2026-04-09 PASS 2 seconds
- 2026-04-10 PASS 2 seconds
- 2026-04-11

### Error 2026-04-11T00:45:32+00:00
```
2026-04-11T00:45:32.2690952Z === RUN   TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-04-11T00:45:32.2691664Z     resource_test.go:32: Creating execution project (1): test-acc-tf-p-6329546428256063002
2026-04-11T00:46:35.5591812Z     resource_test.go:32: 
2026-04-11T00:46:35.5593966Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:46:35.5596950Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T00:46:35.5599263Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T00:46:35.5601346Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/flexcluster/resource_test.go:32
2026-04-11T00:46:35.5602265Z         	Error:      	Received unexpected error:
2026-04-11T00:46:35.5604624Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:35.5605937Z         	Test:       	TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex
2026-04-11T00:46:35.5607867Z         	Messages:   	Project creation failed: test-acc-tf-p-6329546428256063002, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:46:35.5609218Z --- FAIL: TestAccFlexClusterRS_createTimeoutWithDeleteOnCreateFlex (63.29s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 2 seconds
- 2026-04-14 PASS 2 seconds
- 2026-04-15 PASS a second
- 2026-04-16 PASS 2 seconds
- 2026-04-17 PASS 2 seconds
- 2026-04-18 PASS 2 seconds
- 2026-04-19: MISSING
- 2026-04-20 PASS 2 seconds
- 2026-04-21 PASS 2 seconds
- 2026-04-22 PASS 2 seconds
- 2026-04-23 PASS 2 seconds
- 2026-04-24 PASS 2 seconds
- 2026-04-25 PASS 2 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 2 seconds
- 2026-04-28 PASS 2 seconds
- 2026-04-29 PASS 2 seconds
- 2026-04-30 PASS 2 seconds
- 2026-05-01 PASS 2 seconds
- 2026-05-02 PASS 2 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 2 seconds
- 2026-05-05 PASS 2 seconds
- 2026-05-06 PASS 2 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 2 seconds
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
- 2026-04-26 PASS 2 seconds
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 2 seconds
- 2026-05-04
  - PASS 2 seconds
  - PASS 2 seconds
- 2026-05-05 PASS 2 seconds
- 2026-05-06 PASS 2 seconds
