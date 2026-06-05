# generic/auditing/TestAccGenericAuditing_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL
Success rate: 96.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 00:56](#error-2026-05-09t0056010000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 65.03s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 10 seconds
- 2026-05-08 PASS 4 seconds
- 2026-05-09

### Error 2026-05-09T00:56:01+00:00
```
2026-05-09T00:56:01.1054574Z === RUN   TestAccGenericAuditing_basic
2026-05-09T00:56:01.1056402Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-1843950768963707379
2026-05-09T00:56:01.1057455Z     resource_auditing_test.go:30: 
2026-05-09T00:56:01.1058679Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T00:56:01.1060986Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T00:56:01.1063556Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T00:56:01.1066169Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-05-09T00:56:01.1067099Z         	Error:      	Received unexpected error:
2026-05-09T00:56:01.1069198Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:01.1070341Z         	Test:       	TestAccGenericAuditing_basic
2026-05-09T00:56:01.1072250Z         	Messages:   	Project creation failed: test-acc-tf-p-1843950768963707379, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T00:56:01.1073558Z --- FAIL: TestAccGenericAuditing_basic (65.25s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 4 seconds
- 2026-05-12 PASS 11 seconds
- 2026-05-13 PASS 6 seconds
- 2026-05-14 PASS 9 seconds
- 2026-05-15 PASS 6 seconds
- 2026-05-16 PASS 10 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 5 seconds
- 2026-05-19 PASS 11 seconds
- 2026-05-20 PASS 6 seconds
- 2026-05-21 PASS 22 seconds
- 2026-05-22 PASS 5 seconds
- 2026-05-23 PASS 52 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS a minute
- 2026-05-27 PASS 5 seconds
- 2026-05-28 PASS 18 seconds
- 2026-05-29 PASS 6 seconds
- 2026-05-30 PASS a minute
- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02 PASS 21 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 11 seconds
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
- 2026-05-17 PASS 3 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 6 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
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
