# stream/streaminstance/TestAccStreamRSStreamInstance_basic Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 29) FAIL(x 6)
Success rate: 82.86%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 91.06s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 109.01s
[2026-05-21 01:56](#error-2026-05-21t0156320000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.06s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 70.03s
[2026-05-28 02:40](#error-2026-05-28t0240170000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 113.02s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.09s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - PASS 5 seconds
  - PASS 4 seconds
- 2026-05-08 PASS 3 seconds
- 2026-05-09
  - PASS 3 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1202793Z === RUN   TestAccStreamRSStreamInstance_basic
2026-05-09T01:47:38.1203462Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-6495223710341958363
2026-05-09T01:47:38.1204048Z     resource_stream_instance_test.go:18: 
2026-05-09T01:47:38.1204998Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1206808Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1208619Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1210615Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-05-09T01:47:38.1211482Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1213570Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1214633Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-05-09T01:47:38.1216407Z         	Messages:   	Project creation failed: test-acc-tf-p-6495223710341958363, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1217612Z --- FAIL: TestAccStreamRSStreamInstance_basic (91.65s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 3 seconds
- 2026-05-12 PASS 7 seconds
- 2026-05-13 PASS 4 seconds
- 2026-05-14 PASS 50 seconds
- 2026-05-15 PASS 3 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0952877Z === RUN   TestAccStreamRSStreamInstance_basic
2026-05-16T01:46:08.0953758Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-5112640123919089558
2026-05-16T01:46:08.0954342Z     resource_stream_instance_test.go:18: 
2026-05-16T01:46:08.0955306Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0957127Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0958951Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0960975Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-05-16T01:46:08.0961855Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0963947Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0965000Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-05-16T01:46:08.0966798Z         	Messages:   	Project creation failed: test-acc-tf-p-5112640123919089558, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0968127Z --- FAIL: TestAccStreamRSStreamInstance_basic (109.07s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 3 seconds
- 2026-05-19 PASS 5 seconds
- 2026-05-20
  - PASS 4 seconds
  - PASS 3 seconds
- 2026-05-21

### Error 2026-05-21T01:56:32+00:00
```
2026-05-21T01:56:32.6315690Z === RUN   TestAccStreamRSStreamInstance_basic
2026-05-21T01:56:32.6316349Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-3831075592111357461
2026-05-21T01:56:32.6317146Z     resource_stream_instance_test.go:18: 
2026-05-21T01:56:32.6318077Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:56:32.6319803Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:56:32.6321536Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:56:32.6323462Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-05-21T01:56:32.6324387Z         	Error:      	Received unexpected error:
2026-05-21T01:56:32.6326416Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6327688Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-05-21T01:56:32.6329471Z         	Messages:   	Project creation failed: test-acc-tf-p-3831075592111357461, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:56:32.6330608Z --- FAIL: TestAccStreamRSStreamInstance_basic (67.65s)
```

- 2026-05-22 PASS 4 seconds
- 2026-05-23 PASS 8 seconds
- 2026-05-24: MISSING
- 2026-05-25 PASS 3 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8736648Z === RUN   TestAccStreamRSStreamInstance_basic
2026-05-26T03:14:06.8738107Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-6971728525047049276
2026-05-26T03:14:06.8738743Z     resource_stream_instance_test.go:18: 
2026-05-26T03:14:06.8739720Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8741559Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8743565Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8745623Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-05-26T03:14:06.8746502Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8748744Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8749831Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-05-26T03:14:06.8751626Z         	Messages:   	Project creation failed: test-acc-tf-p-6971728525047049276, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8752848Z --- FAIL: TestAccStreamRSStreamInstance_basic (70.29s)
```

- 2026-05-27 PASS 5 seconds
- 2026-05-28

### Error 2026-05-28T02:40:17+00:00
```
2026-05-28T02:40:17.5230222Z === RUN   TestAccStreamRSStreamInstance_basic
2026-05-28T02:40:17.5230880Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-1450854729367179144
2026-05-28T02:40:17.5231457Z     resource_stream_instance_test.go:18: 
2026-05-28T02:40:17.5232524Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T02:40:17.5234550Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T02:40:17.5236369Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T02:40:17.5238630Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-05-28T02:40:17.5239498Z         	Error:      	Received unexpected error:
2026-05-28T02:40:17.5241449Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5242520Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-05-28T02:40:17.5244297Z         	Messages:   	Project creation failed: test-acc-tf-p-1450854729367179144, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T02:40:17.5245507Z --- FAIL: TestAccStreamRSStreamInstance_basic (113.16s)
```

- 2026-05-29 PASS 5 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6697747Z === RUN   TestAccStreamRSStreamInstance_basic
2026-05-30T02:30:49.6698448Z     resource_stream_instance_test.go:18: Creating execution project (1): test-acc-tf-p-5653309754624925477
2026-05-30T02:30:49.6699059Z     resource_stream_instance_test.go:18: 
2026-05-30T02:30:49.6700041Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6702251Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6704275Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6706714Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streaminstance/resource_stream_instance_test.go:18
2026-05-30T02:30:49.6707830Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6710109Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6711649Z         	Test:       	TestAccStreamRSStreamInstance_basic
2026-05-30T02:30:49.6713913Z         	Messages:   	Project creation failed: test-acc-tf-p-5653309754624925477, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6715264Z --- FAIL: TestAccStreamRSStreamInstance_basic (66.91s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 4 seconds
- 2026-06-02 PASS 6 seconds
- 2026-06-03 PASS 4 seconds
- 2026-06-04 PASS 5 seconds
- 2026-06-05 PASS 3 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 3 seconds
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
- 2026-05-24 PASS 3 seconds
- 2026-05-25 PASS 5 seconds
- 2026-05-26 PASS 3 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 3 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
