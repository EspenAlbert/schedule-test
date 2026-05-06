# advanced_cluster/advancedcluster/TestAccAdvancedCluster_effectiveTenantFlex Test Details
# Found 33 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 00:46](#error-2026-04-11t0046090000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 77.09s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 5 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 5 seconds
- 2026-04-10 PASS 6 seconds
- 2026-04-11

### Error 2026-04-11T00:46:09+00:00
```
2026-04-11T00:46:09.2737547Z === RUN   TestAccAdvancedCluster_effectiveTenantFlex
2026-04-11T00:47:27.1549418Z     shared_resource.go:160: 
2026-04-11T00:47:27.1559434Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T00:47:27.1562801Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:160
2026-04-11T00:47:27.1564707Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:256
2026-04-11T00:47:27.1566557Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:159
2026-04-11T00:47:27.1568373Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:170
2026-04-11T00:47:27.1570362Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/advancedcluster/effective_fields_test.go:77
2026-04-11T00:47:27.1571590Z         	Error:      	Received unexpected error:
2026-04-11T00:47:27.1573958Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:47:27.1597570Z         	Test:       	TestAccAdvancedCluster_effectiveTenantFlex
2026-04-11T00:47:27.1599919Z         	Messages:   	Project creation failed: test-acc-tf-p-873167589288407656, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T00:47:27.1601625Z --- FAIL: TestAccAdvancedCluster_effectiveTenantFlex (77.88s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS a moment
- 2026-04-14 PASS 6 seconds
- 2026-04-15 PASS a moment
- 2026-04-16 PASS 5 seconds
- 2026-04-17 PASS 6 seconds
- 2026-04-18 PASS 5 seconds
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21 PASS 5 seconds
- 2026-04-22 PASS 6 seconds
- 2026-04-23 PASS 5 seconds
- 2026-04-24 PASS 6 seconds
- 2026-04-25 PASS 5 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 6 seconds
- 2026-04-28 PASS 5 seconds
- 2026-04-29 PASS a second
- 2026-04-30 PASS 6 seconds
- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 4 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05 PASS 5 seconds
- 2026-05-06 PASS 5 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS a moment
  - PASS 6 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 6 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19: MISSING
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 6 seconds
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS a moment
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 6 seconds
- 2026-05-04 PASS a moment
- 2026-05-05: MISSING
- 2026-05-06 PASS 6 seconds
