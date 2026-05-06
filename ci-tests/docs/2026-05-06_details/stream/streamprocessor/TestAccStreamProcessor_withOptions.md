# stream/streamprocessor/TestAccStreamProcessor_withOptions Test Details
# Found 38 TestRuns in dev, qa from 2026-04-07 to 2026-05-06 from master branch: 1 unique tests, PASS(x 35) FAIL(x 3)
Success rate: 92.11%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-04-11 01:13](#error-2026-04-11t0113150000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 82.06s
[2026-04-16 00:56](#error-2026-04-16t0056520000) | OUT_OF_CAPACITY /api/atlas/v2/groups/69e032768379397d109cf55f/clusters | dev | out_of_capacity | 0.07s
[2026-04-30 01:31](#error-2026-04-30t0131460000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 102.05s

### Timeline
- 2026-04-06: MISSING
- 2026-04-07 PASS 11 minutes
- 2026-04-08 PASS 12 minutes
- 2026-04-09 PASS 21 minutes
- 2026-04-10 PASS 18 minutes
- 2026-04-11

### Error 2026-04-11T01:13:15+00:00
```
2026-04-11T01:13:15.9951827Z === RUN   TestAccStreamProcessor_withOptions
2026-04-11T01:13:15.9952398Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-3207636668063292988
2026-04-11T01:13:15.9952888Z     resource_test.go:171: 
2026-04-11T01:13:15.9953798Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-11T01:13:15.9955589Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-11T01:13:15.9957513Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-11T01:13:15.9959470Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-11T01:13:15.9961363Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-04-11T01:13:15.9962565Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-11T01:13:15.9963072Z         	Error:      	Received unexpected error:
2026-04-11T01:13:15.9965005Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9966053Z         	Test:       	TestAccStreamProcessor_withOptions
2026-04-11T01:13:15.9967815Z         	Messages:   	Project creation failed: test-acc-tf-p-3207636668063292988, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-11T01:13:15.9969277Z --- FAIL: TestAccStreamProcessor_withOptions (82.56s)
```

- 2026-04-12: MISSING
- 2026-04-13 PASS 12 minutes
- 2026-04-14 PASS 12 minutes
- 2026-04-15 PASS 12 minutes
- 2026-04-16

### Error 2026-04-16T00:56:52+00:00
```
2026-04-16T00:56:52.0257574Z === RUN   TestAccStreamProcessor_withOptions
2026-04-16T00:56:52.0258004Z     resource_test.go:172: Creating execution cluster: test-acc-tf-c-7121426663258567668
2026-04-16T00:56:52.0258566Z     resource_test.go:172: 
2026-04-16T00:56:52.0259263Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:46
2026-04-16T00:56:52.0260611Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:194
2026-04-16T00:56:52.0262039Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:172
2026-04-16T00:56:52.0262660Z         	Error:      	Received unexpected error:
2026-04-16T00:56:52.0264571Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032768379397d109cf55f/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0265522Z         	Test:       	TestAccStreamProcessor_withOptions
2026-04-16T00:56:52.0267123Z         	Messages:   	Cluster creation failed: test-acc-tf-c-7121426663258567668, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups/69e032768379397d109cf55f/clusters POST: HTTP 409 Conflict (Error code: "OUT_OF_CAPACITY") Detail: The requested region is currently out of capacity for the requested instance size. Reason: Conflict. Params: [], BadRequestDetail: 
2026-04-16T00:56:52.0268475Z --- FAIL: TestAccStreamProcessor_withOptions (0.72s)
```

- 2026-04-17 PASS 11 minutes
- 2026-04-18 PASS 14 minutes
- 2026-04-19: MISSING
- 2026-04-20 PASS 12 minutes
- 2026-04-21 PASS 14 minutes
- 2026-04-22 PASS 46 minutes
- 2026-04-23 PASS 14 minutes
- 2026-04-24 PASS 13 minutes
- 2026-04-25 PASS 11 minutes
- 2026-04-26: MISSING
- 2026-04-27 PASS 12 minutes
- 2026-04-28 PASS 11 minutes
- 2026-04-29 PASS 12 minutes
- 2026-04-30
  - FAIL a minute

### Error 2026-04-30T01:31:46+00:00
```
2026-04-30T01:31:46.2850205Z === RUN   TestAccStreamProcessor_withOptions
2026-04-30T01:31:46.2850775Z     resource_test.go:171: Creating execution project (1): test-acc-tf-p-5671535686636049799
2026-04-30T01:31:46.2851267Z     resource_test.go:171: 
2026-04-30T01:31:46.2852302Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-04-30T01:31:46.2854086Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-04-30T01:31:46.2855873Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-04-30T01:31:46.2857666Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-04-30T01:31:46.2859559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamprocessor/resource_test.go:171
2026-04-30T01:31:46.2860758Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-04-30T01:31:46.2861385Z         	Error:      	Received unexpected error:
2026-04-30T01:31:46.2863834Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2865078Z         	Test:       	TestAccStreamProcessor_withOptions
2026-04-30T01:31:46.2867219Z         	Messages:   	Project creation failed: test-acc-tf-p-5671535686636049799, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-04-30T01:31:46.2868601Z --- FAIL: TestAccStreamProcessor_withOptions (102.54s)
```

  - PASS 12 minutes
- 2026-05-01 PASS 12 minutes
- 2026-05-02 PASS 11 minutes
- 2026-05-03: MISSING
- 2026-05-04 PASS 12 minutes
- 2026-05-05 PASS 17 minutes
- 2026-05-06 PASS 13 minutes

## QA Environment
### Timeline
- 2026-04-06: MISSING
- 2026-04-07: MISSING
- 2026-04-08 PASS 13 minutes
- 2026-04-09: MISSING
- 2026-04-10: MISSING
- 2026-04-11: MISSING
- 2026-04-12 PASS 13 minutes
- 2026-04-13: MISSING
- 2026-04-14: MISSING
- 2026-04-15: MISSING
- 2026-04-16: MISSING
- 2026-04-17: MISSING
- 2026-04-18: MISSING
- 2026-04-19 PASS 13 minutes
- 2026-04-20: MISSING
- 2026-04-21: MISSING
- 2026-04-22
  - PASS 13 minutes
  - PASS 11 minutes
- 2026-04-23: MISSING
- 2026-04-24: MISSING
- 2026-04-25: MISSING
- 2026-04-26 PASS 13 minutes
- 2026-04-27: MISSING
- 2026-04-28: MISSING
- 2026-04-29: MISSING
- 2026-04-30: MISSING
- 2026-05-01: MISSING
- 2026-05-02: MISSING
- 2026-05-03 PASS 13 minutes
- 2026-05-04
  - PASS 13 minutes
  - PASS 11 minutes
- 2026-05-05 PASS 11 minutes
- 2026-05-06 PASS 13 minutes
