# autogen_fast/logintegration/TestAccLogIntegration_basicAzure Test Details
# Found 35 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 33) FAIL(x 2)
Success rate: 94.29%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-30 01:01](#error-2026-04-30t0101120000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-05 00:57](#error-2026-05-05t0057430000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.00s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 4 minutes
- 2026-04-08 PASS 4 minutes
- 2026-04-09 PASS 5 minutes
- 2026-04-10 PASS 3 minutes
- 2026-04-11 PASS 3 minutes
- 2026-04-12: MISSING
- 2026-04-13 PASS 4 minutes
- 2026-04-14 PASS 4 minutes
- 2026-04-15 PASS 4 minutes
- 2026-04-16 PASS 4 minutes
- 2026-04-17 PASS 3 minutes
- 2026-04-18 PASS 4 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 4 minutes
- 2026-04-21 PASS 3 minutes
- 2026-04-22 PASS 4 minutes
- 2026-04-23 PASS 3 minutes
- 2026-04-24 PASS 3 minutes
- 2026-04-25 PASS 4 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 4 minutes
- 2026-04-28 PASS 4 minutes
- 2026-04-29 PASS 4 minutes
- 2026-04-30

### Error 2026-04-30T01:01:12+00:00
```
2026-04-30T01:01:12.3445615Z === RUN   TestAccLogIntegration_basicAzure
2026-04-30T01:01:12.3446195Z     resource_test.go:113: Creating execution project (1): test-acc-tf-p-103301660727282021
2026-04-30T01:01:12.3446696Z     resource_test.go:113: 
2026-04-30T01:01:12.3447571Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:01:12.3449242Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:01:12.3451048Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:01:12.3452828Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:113
2026-04-30T01:01:12.3453616Z         	Error:      	Received unexpected error:
2026-04-30T01:01:12.3455329Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3456327Z         	Test:       	TestAccLogIntegration_basicAzure
2026-04-30T01:01:12.3458008Z         	Messages:   	Project creation failed: test-acc-tf-p-103301660727282021, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:01:12.3459147Z --- FAIL: TestAccLogIntegration_basicAzure (61.64s)
```

- 2026-05-01 PASS 4 minutes
- 2026-05-02 PASS 4 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 4 minutes
- 2026-05-05

### Error 2026-05-05T00:57:43+00:00
```
2026-05-05T00:57:43.1818178Z === RUN   TestAccLogIntegration_basicAzure
2026-05-05T00:57:43.1819275Z     resource_test.go:115: Creating execution project (1): test-acc-tf-p-5286055851518215576
2026-05-05T00:57:43.1820200Z     resource_test.go:115: 
2026-05-05T00:57:43.1821918Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:57:43.1825237Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:57:43.1828962Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:57:43.1832523Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/logintegration/resource_test.go:115
2026-05-05T00:57:43.1834033Z         	Error:      	Received unexpected error:
2026-05-05T00:57:43.1837826Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:43.1839449Z         	Test:       	TestAccLogIntegration_basicAzure
2026-05-05T00:57:43.1843672Z         	Messages:   	Project creation failed: test-acc-tf-p-5286055851518215576, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:57:43.1845806Z --- FAIL: TestAccLogIntegration_basicAzure (66.02s)
```

- 2026-05-06 PASS 3 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08
  - PASS 4 minutes
  - PASS 4 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 3 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 3 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 5 minutes
- 2026-05-04 PASS 4 minutes
- 2026-05-05: MISSING
- 2026-05-06 PASS 5 minutes
