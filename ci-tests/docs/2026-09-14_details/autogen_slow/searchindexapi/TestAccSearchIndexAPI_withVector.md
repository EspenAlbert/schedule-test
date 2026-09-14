# autogen_slow/searchindexapi/TestAccSearchIndexAPI_withVector Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 6) FAIL(x 3)
Success rate: 66.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-09-10 01:33](#error-2026-09-10t0133060000) |  | dev |  | 0.00s
[2026-09-11 03:01](#error-2026-09-11t0301530000) |  | dev | timeout | 0.00s
[2026-09-11 07:31](#error-2026-09-11t0731030000) |  | dev |  | 0.00s

### Timeline
- 2026-09-07 PASS 46 minutes
- 2026-09-08 PASS 28 minutes
- 2026-09-09 PASS 11 minutes
- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1307792Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-10T01:33:06.1308360Z     resource_test.go:141: 
2026-09-10T01:33:06.1309363Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-10T01:33:06.1311367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-10T01:33:06.1312198Z         	Error:      	Received unexpected error:
2026-09-10T01:33:06.1313463Z         	            	sample dataset load 6aa201365b8d9510e89370dd failed for cluster 6aa1fcb04ab31ba34525537f:test-acc-tf-c-1596466085034706675
2026-09-10T01:33:06.1314217Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-10T01:33:06.1314609Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

- 2026-09-11
  - FAIL unknown

### Error 2026-09-11T03:01:53+00:00
```
2026-09-11T03:01:53.1631848Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-11T03:01:53.1632247Z     resource_test.go:141: 
2026-09-11T03:01:53.1633016Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T03:01:53.1634535Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-11T03:01:53.1635173Z         	Error:      	Received unexpected error:
2026-09-11T03:01:53.1635986Z         	            	timeout while waiting for state to become 'COMPLETED' (last state: 'WORKING', timeout: 15m0s)
2026-09-11T03:01:53.1636648Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-11T03:01:53.1636965Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

  - FAIL unknown

### Error 2026-09-11T07:31:03+00:00
```
2026-09-11T07:31:03.2003976Z === RUN   TestAccSearchIndexAPI_withVector
2026-09-11T07:31:03.2004639Z     resource_test.go:141: 
2026-09-11T07:31:03.2006229Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:180
2026-09-11T07:31:03.2009150Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/searchindexapi/resource_test.go:141
2026-09-11T07:31:03.2010508Z         	Error:      	Received unexpected error:
2026-09-11T07:31:03.2012356Z         	            	sample dataset load 6aa3a5fff7fcc4bbebf76935 failed for cluster 6aa3a28df7fcc4bbebf53df1:test-acc-tf-c-1260780199030207545
2026-09-11T07:31:03.2013547Z         	Test:       	TestAccSearchIndexAPI_withVector
2026-09-11T07:31:03.2014251Z --- FAIL: TestAccSearchIndexAPI_withVector (0.00s)
```

- 2026-09-12 PASS 16 minutes
- 2026-09-13: MISSING
- 2026-09-14 PASS 2 hours

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 36 minutes
- 2026-09-14: MISSING
