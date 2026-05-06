# generic/auditing/TestAccGenericAuditing_basic Test Details
# Found 34 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 32) FAIL(x 2)
Success rate: 94.12%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-18 00:45](#error-2026-04-18t0045320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 61.06s
[2026-05-05 00:52](#error-2026-05-05t0052240000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.03s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 12 seconds
- 2026-04-08 PASS 6 seconds
- 2026-04-09 PASS 50 seconds
- 2026-04-10 PASS 6 seconds
- 2026-04-11 PASS a minute
- 2026-04-12: MISSING
- 2026-04-13 PASS 4 seconds
- 2026-04-14 PASS 11 seconds
- 2026-04-15 PASS 6 seconds
- 2026-04-16 PASS 11 seconds
- 2026-04-17 PASS 4 seconds
- 2026-04-18

### Error 2026-04-18T00:45:32+00:00
```
2026-04-18T00:45:32.8841519Z === RUN   TestAccGenericAuditing_basic
2026-04-18T00:45:32.8842373Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-3404274236602650073
2026-04-18T00:45:32.8844616Z     resource_auditing_test.go:30: 
2026-04-18T00:45:32.8846031Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-18T00:45:32.8848051Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-18T00:45:32.8850013Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-18T00:45:32.8852464Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-04-18T00:45:32.8853366Z         	Error:      	Received unexpected error:
2026-04-18T00:45:32.8855467Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:32.8856621Z         	Test:       	TestAccGenericAuditing_basic
2026-04-18T00:45:32.8858518Z         	Messages:   	Project creation failed: test-acc-tf-p-3404274236602650073, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-18T00:45:32.8859858Z --- FAIL: TestAccGenericAuditing_basic (61.65s)
```

- 2026-04-19: MISSING
- 2026-04-20 PASS 4 seconds
- 2026-04-21 PASS 10 seconds
- 2026-04-22
  - PASS 5 seconds
  - PASS 5 seconds
- 2026-04-23 PASS 12 seconds
- 2026-04-24 PASS 7 seconds
- 2026-04-25 PASS 13 seconds
- 2026-04-26: MISSING
- 2026-04-27 PASS 5 seconds
- 2026-04-28 PASS 24 seconds
- 2026-04-29 PASS 6 seconds
- 2026-04-30 PASS 10 seconds
- 2026-05-01 PASS 6 seconds
- 2026-05-02 PASS 11 seconds
- 2026-05-03: MISSING
- 2026-05-04 PASS 6 seconds
- 2026-05-05

### Error 2026-05-05T00:52:24+00:00
```
2026-05-05T00:52:24.0919917Z === RUN   TestAccGenericAuditing_basic
2026-05-05T00:52:24.0921568Z     resource_auditing_test.go:30: Creating execution project (1): test-acc-tf-p-8678372309068109840
2026-05-05T00:52:24.0922731Z     resource_auditing_test.go:30: 
2026-05-05T00:52:24.0923845Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-05T00:52:24.0925802Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-05T00:52:24.0928513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-05T00:52:24.0930603Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/auditing/resource_auditing_test.go:30
2026-05-05T00:52:24.0931520Z         	Error:      	Received unexpected error:
2026-05-05T00:52:24.0933613Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:24.0934840Z         	Test:       	TestAccGenericAuditing_basic
2026-05-05T00:52:24.0936735Z         	Messages:   	Project creation failed: test-acc-tf-p-8678372309068109840, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-05T00:52:24.0938352Z --- FAIL: TestAccGenericAuditing_basic (67.32s)
```

- 2026-05-06 PASS 6 seconds

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 4 seconds
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 4 seconds
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 4 seconds
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22 PASS 4 seconds
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
- 2026-05-03: MISSING
- 2026-05-04 PASS 3 seconds
- 2026-05-05: MISSING
- 2026-05-06 PASS 3 seconds
