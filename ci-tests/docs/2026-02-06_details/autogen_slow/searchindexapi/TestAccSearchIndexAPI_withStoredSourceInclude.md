# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withStoredSourceInclude Test Details
# Found 31 TestRuns in dev, qa from 2026-01-08 to 2026-02-06 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-02-03 00:42](#error-2026-02-03t0042450000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69814427e3c7fce231800b79/clusters | dev | out_of_capacity | 0.04s

### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 5 minutes
- 2026-01-09 PASS 4 minutes
- 2026-01-10 PASS 8 minutes
- 2026-01-11: MISSING
- 2026-01-12 PASS 8 minutes
- 2026-01-13 PASS 8 minutes
- 2026-01-14 PASS 10 minutes
- 2026-01-15 PASS 8 minutes
- 2026-01-16 PASS 4 minutes
- 2026-01-17 PASS 14 minutes
- 2026-01-18: MISSING
- 2026-01-19 PASS 11 minutes
- 2026-01-20 PASS 7 minutes
- 2026-01-21 PASS 7 minutes
- 2026-01-22 PASS 6 minutes
- 2026-01-23 PASS 6 minutes
- 2026-01-24 PASS 11 minutes
- 2026-01-25: MISSING
- 2026-01-26 PASS 9 minutes
- 2026-01-27 PASS 10 minutes
- 2026-01-28 PASS 15 minutes
- 2026-01-29 PASS 7 minutes
- 2026-01-30 PASS 7 minutes
- 2026-01-31: MISSING
- 2026-02-01: MISSING
- 2026-02-02: MISSING
- 2026-02-03

### Error 2026-02-03T00:42:45+00:00
```
2026-02-03T00:42:45.4581784Z === RUN   TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-03T00:42:45.4582756Z     resource_test.go:180: Creating execution cluster: test-acc-tf-c-4304711000574500842
2026-02-03T00:42:45.4583556Z     resource_test.go:180: 
2026-02-03T00:42:45.4585143Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-02-03T00:42:45.4588511Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:203
2026-02-03T00:42:45.4592132Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:180
2026-02-03T00:42:45.4593550Z         	Error:      	Received unexpected error:
2026-02-03T00:42:45.4598378Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4600721Z         	Test:       	TestAccSearchIndexAPI_withStoredSourceInclude
2026-02-03T00:42:45.4604612Z         	Messages:   	Cluster creation failed: test-acc-tf-c-4304711000574500842, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69814427e3c7fce231800b79/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-02-03T00:42:45.4607191Z --- FAIL: TestAccSearchIndexAPI_withStoredSourceInclude (0.43s)
```

- 2026-02-04 PASS 4 minutes
- 2026-02-05 PASS 7 minutes
- 2026-02-06 PASS 7 minutes

## QA Environment
### Timeline
- 2026-01-07: MISSING
- 2026-01-08 PASS 7 minutes
- 2026-01-09: MISSING
- 2026-01-10: MISSING
- 2026-01-11 PASS 3 minutes
- 2026-01-12: MISSING
- 2026-01-13: MISSING
- 2026-01-14: MISSING
- 2026-01-15: MISSING
- 2026-01-16: MISSING
- 2026-01-17: MISSING
- 2026-01-18 PASS 8 minutes
- 2026-01-19: MISSING
- 2026-01-20: MISSING
- 2026-01-21: MISSING
- 2026-01-22 PASS 10 minutes
- 2026-01-23: MISSING
- 2026-01-24: MISSING
- 2026-01-25 PASS 9 minutes
- 2026-01-26: MISSING
- 2026-01-27: MISSING
- 2026-01-28: MISSING
- 2026-01-29: MISSING
- 2026-01-30: MISSING
- 2026-01-31: MISSING
- 2026-02-01 PASS 5 minutes
- 2026-02-02: MISSING
- 2026-02-03: MISSING
- 2026-02-04 PASS 11 minutes
- 2026-02-05: MISSING
- 2026-02-06: MISSING
