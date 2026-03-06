# service_account/serviceaccountprojectassignment/TestAccServiceAccountProjectAssignment_singleAssignment Test Details
# Found 33 TestRuns in dev, qa from 2026-02-04 to 2026-03-06 from master branch: 1 unique tests, PASS(x 32) FAIL
Success rate: 96.97%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-03-03 00:41](#error-2026-03-03t0041290000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 75.04s

### Timeline
- 2026-02-04: MISSING
- 2026-02-05 PASS 5 seconds
- 2026-02-06 PASS 7 seconds
- 2026-02-07 PASS 10 seconds
- 2026-02-08: MISSING
- 2026-02-09 PASS 6 seconds
- 2026-02-10 PASS 6 seconds
- 2026-02-11 PASS 5 seconds
- 2026-02-12 PASS 8 seconds
- 2026-02-13 PASS 5 seconds
- 2026-02-14 PASS 5 seconds
- 2026-02-15: MISSING
- 2026-02-16 PASS 7 seconds
- 2026-02-17 PASS 8 seconds
- 2026-02-18 PASS 6 seconds
- 2026-02-19 PASS 7 seconds
- 2026-02-20 PASS 4 seconds
- 2026-02-21 PASS 7 seconds
- 2026-02-22: MISSING
- 2026-02-23 PASS 6 seconds
- 2026-02-24 PASS 6 seconds
- 2026-02-25 PASS 6 seconds
- 2026-02-26 PASS 7 seconds
- 2026-02-27 PASS 7 seconds
- 2026-02-28 PASS 7 seconds
- 2026-03-01: MISSING
- 2026-03-02 PASS 5 seconds
- 2026-03-03

### Error 2026-03-03T00:41:29+00:00
```
2026-03-03T00:41:29.3608562Z === RUN   TestAccServiceAccountProjectAssignment_singleAssignment
2026-03-03T00:41:29.3610604Z     resource_test.go:24: Creating execution project (1): test-acc-tf-p-5253179920702003217
2026-03-03T00:41:29.3611747Z     resource_test.go:24: 
2026-03-03T00:41:29.3612961Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-03-03T00:41:29.3615232Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-03-03T00:41:29.3617513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:122
2026-03-03T00:41:29.3620288Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/serviceaccountprojectassignment/resource_test.go:24
2026-03-03T00:41:29.3621181Z         	Error:      	Received unexpected error:
2026-03-03T00:41:29.3623123Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:41:29.3624570Z         	Test:       	TestAccServiceAccountProjectAssignment_singleAssignment
2026-03-03T00:41:29.3626430Z         	Messages:   	Project creation failed: test-acc-tf-p-5253179920702003217, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-03-03T00:41:29.3627719Z --- FAIL: TestAccServiceAccountProjectAssignment_singleAssignment (75.44s)
```

- 2026-03-04 PASS 6 seconds
- 2026-03-05 PASS a minute
- 2026-03-06 PASS 7 seconds

## QA Environment
### Timeline
- 2026-02-04 PASS 6 seconds
- 2026-02-05: MISSING
- 2026-02-06: MISSING
- 2026-02-07: MISSING
- 2026-02-08 PASS 4 seconds
- 2026-02-09: MISSING
- 2026-02-10: MISSING
- 2026-02-11: MISSING
- 2026-02-12: MISSING
- 2026-02-13: MISSING
- 2026-02-14: MISSING
- 2026-02-15 PASS 5 seconds
- 2026-02-16: MISSING
- 2026-02-17 PASS 5 seconds
- 2026-02-18: MISSING
- 2026-02-19: MISSING
- 2026-02-20: MISSING
- 2026-02-21: MISSING
- 2026-02-22 PASS 4 seconds
- 2026-02-23: MISSING
- 2026-02-24: MISSING
- 2026-02-25: MISSING
- 2026-02-26: MISSING
- 2026-02-27: MISSING
- 2026-02-28: MISSING
- 2026-03-01 PASS 5 seconds
- 2026-03-02: MISSING
- 2026-03-03 PASS 5 seconds
- 2026-03-04: MISSING
- 2026-03-05: MISSING
- 2026-03-06: MISSING
