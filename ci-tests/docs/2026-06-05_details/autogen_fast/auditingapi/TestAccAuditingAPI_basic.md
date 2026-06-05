# autogen_fast/auditingapi/TestAccAuditingAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 26) FAIL(x 4)
Success rate: 86.67%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.10s
[2026-05-21 01:09](#error-2026-05-21t0109190000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 94.04s
[2026-05-23 01:05](#error-2026-05-23t0105260000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.04s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 5 seconds
- 2026-05-08 PASS 5 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.2721516Z === RUN   TestAccAuditingAPI_basic
2026-05-09T01:07:49.2722103Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2224982647607116635
2026-05-09T01:07:49.2722624Z     resource_test.go:17: 
2026-05-09T01:07:49.2723651Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.2725559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.2727661Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.2729664Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-05-09T01:07:49.2730520Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.2732566Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2733641Z         	Test:       	TestAccAuditingAPI_basic
2026-05-09T01:07:49.2735464Z         	Messages:   	Project creation failed: test-acc-tf-p-2224982647607116635, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.2736775Z --- FAIL: TestAccAuditingAPI_basic (72.98s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 6 seconds
- 2026-05-12 PASS 16 seconds
- 2026-05-13 PASS 7 seconds
- 2026-05-14 PASS 8 seconds
- 2026-05-15 PASS 5 seconds
- 2026-05-16 PASS 42 seconds
- 2026-05-17: MISSING
- 2026-05-18 PASS 5 seconds
- 2026-05-19 PASS a minute
- 2026-05-20 PASS 6 seconds
- 2026-05-21

### Error 2026-05-21T01:09:19+00:00
```
2026-05-21T01:09:19.7930657Z === RUN   TestAccAuditingAPI_basic
2026-05-21T01:09:19.7931939Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-432479162783006731
2026-05-21T01:09:19.7933072Z     resource_test.go:17: 
2026-05-21T01:09:19.7934783Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:19.7938421Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:19.7941812Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:19.7945781Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-05-21T01:09:19.7947380Z         	Error:      	Received unexpected error:
2026-05-21T01:09:19.7951369Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7953218Z         	Test:       	TestAccAuditingAPI_basic
2026-05-21T01:09:19.7956720Z         	Messages:   	Project creation failed: test-acc-tf-p-432479162783006731, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:19.7959513Z --- FAIL: TestAccAuditingAPI_basic (94.37s)
```

- 2026-05-22 PASS 8 seconds
- 2026-05-23

### Error 2026-05-23T01:05:26+00:00
```
2026-05-23T01:05:26.5061653Z === RUN   TestAccAuditingAPI_basic
2026-05-23T01:05:26.5062828Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6074210899848176306
2026-05-23T01:05:26.5063722Z     resource_test.go:17: 
2026-05-23T01:05:26.5065541Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:05:26.5068917Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:05:26.5072713Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:05:26.5076293Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-05-23T01:05:26.5077895Z         	Error:      	Received unexpected error:
2026-05-23T01:05:26.5081634Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5084057Z         	Test:       	TestAccAuditingAPI_basic
2026-05-23T01:05:26.5086204Z         	Messages:   	Project creation failed: test-acc-tf-p-6074210899848176306, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:05:26.5088339Z --- FAIL: TestAccAuditingAPI_basic (66.43s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 7 seconds
- 2026-05-26 PASS 45 seconds
- 2026-05-27 PASS 10 seconds
- 2026-05-28 PASS a minute
- 2026-05-29 PASS 6 seconds
- 2026-05-30 PASS 50 seconds
- 2026-05-31: MISSING
- 2026-06-01 PASS 5 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0378338Z === RUN   TestAccAuditingAPI_basic
2026-06-02T01:15:50.0379117Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6566494635681029750
2026-06-02T01:15:50.0379805Z     resource_test.go:17: 
2026-06-02T01:15:50.0380790Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0382624Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0384576Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0386498Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/auditingapi/resource_test.go:17
2026-06-02T01:15:50.0387415Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0389423Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0390492Z         	Test:       	TestAccAuditingAPI_basic
2026-06-02T01:15:50.0392266Z         	Messages:   	Project creation failed: test-acc-tf-p-6566494635681029750, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0393466Z --- FAIL: TestAccAuditingAPI_basic (72.64s)
```

- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 7 seconds
- 2026-06-05 PASS 6 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 9 seconds
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
- 2026-05-24 PASS 10 seconds
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
