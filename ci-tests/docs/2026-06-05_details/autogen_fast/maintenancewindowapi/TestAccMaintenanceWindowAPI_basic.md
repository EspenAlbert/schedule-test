# autogen_fast/maintenancewindowapi/TestAccMaintenanceWindowAPI_basic Test Details
# Found 30 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 21) FAIL(x 9)
Success rate: 70.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-09 01:07](#error-2026-05-09t0107490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 92.10s
[2026-05-16 00:58](#error-2026-05-16t0058270000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 64.05s
[2026-05-19 01:08](#error-2026-05-19t0108180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 66.06s
[2026-05-21 01:09](#error-2026-05-21t0109210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 67.01s
[2026-05-23 01:09](#error-2026-05-23t0109250000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 87.04s
[2026-05-26 02:15](#error-2026-05-26t0215540000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 100.00s
[2026-05-28 01:01](#error-2026-05-28t0101180000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 85.03s
[2026-05-30 01:10](#error-2026-05-30t0110400000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.01s
[2026-06-02 01:15](#error-2026-06-02t0115500000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 72.08s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07 PASS 13 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09

### Error 2026-05-09T01:07:49+00:00
```
2026-05-09T01:07:49.3091630Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-09T01:07:49.3092711Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3111068786550451230
2026-05-09T01:07:49.3093825Z     resource_test.go:17: 
2026-05-09T01:07:49.3095622Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:07:49.3099433Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:07:49.3103273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:07:49.3107287Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-09T01:07:49.3109152Z         	Error:      	Received unexpected error:
2026-05-09T01:07:49.3113665Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3115691Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-09T01:07:49.3119339Z         	Messages:   	Project creation failed: test-acc-tf-p-3111068786550451230, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:07:49.3121589Z --- FAIL: TestAccMaintenanceWindowAPI_basic (92.98s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 13 seconds
- 2026-05-12 PASS 14 seconds
- 2026-05-13 PASS 14 seconds
- 2026-05-14 PASS 14 seconds
- 2026-05-15 PASS 12 seconds
- 2026-05-16

### Error 2026-05-16T00:58:27+00:00
```
2026-05-16T00:58:27.4980942Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-16T00:58:27.4981509Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-53098246815738553
2026-05-16T00:58:27.4982007Z     resource_test.go:17: 
2026-05-16T00:58:27.4982881Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T00:58:27.4984633Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T00:58:27.4986377Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T00:58:27.4988176Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-16T00:58:27.4988995Z         	Error:      	Received unexpected error:
2026-05-16T00:58:27.4990729Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4991752Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-16T00:58:27.4993401Z         	Messages:   	Project creation failed: test-acc-tf-p-53098246815738553, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T00:58:27.4994529Z --- FAIL: TestAccMaintenanceWindowAPI_basic (64.46s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 13 seconds
- 2026-05-19

### Error 2026-05-19T01:08:18+00:00
```
2026-05-19T01:08:18.4581961Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-19T01:08:18.4582659Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-4567969230720863082
2026-05-19T01:08:18.4583201Z     resource_test.go:17: 
2026-05-19T01:08:18.4584489Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-19T01:08:18.4586357Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-19T01:08:18.4588231Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-19T01:08:18.4590268Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-19T01:08:18.4591363Z         	Error:      	Received unexpected error:
2026-05-19T01:08:18.4593371Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4594803Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-19T01:08:18.4596791Z         	Messages:   	Project creation failed: test-acc-tf-p-4567969230720863082, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-19T01:08:18.4598046Z --- FAIL: TestAccMaintenanceWindowAPI_basic (66.60s)
```

- 2026-05-20 PASS 11 seconds
- 2026-05-21

### Error 2026-05-21T01:09:21+00:00
```
2026-05-21T01:09:21.2619576Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-21T01:09:21.2620230Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2288796256129793719
2026-05-21T01:09:21.2620786Z     resource_test.go:17: 
2026-05-21T01:09:21.2621763Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-21T01:09:21.2623620Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-21T01:09:21.2625489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-21T01:09:21.2627886Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-21T01:09:21.2632715Z         	Error:      	Received unexpected error:
2026-05-21T01:09:21.2636582Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2638786Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-21T01:09:21.2640617Z         	Messages:   	Project creation failed: test-acc-tf-p-2288796256129793719, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-21T01:09:21.2641853Z --- FAIL: TestAccMaintenanceWindowAPI_basic (67.09s)
```

- 2026-05-22 PASS 15 seconds
- 2026-05-23

### Error 2026-05-23T01:09:25+00:00
```
2026-05-23T01:09:25.6885971Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-23T01:09:25.6886619Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-6021291349501238752
2026-05-23T01:09:25.6887175Z     resource_test.go:17: 
2026-05-23T01:09:25.6888146Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T01:09:25.6890020Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T01:09:25.6892012Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T01:09:25.6894278Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-23T01:09:25.6895190Z         	Error:      	Received unexpected error:
2026-05-23T01:09:25.6897213Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:09:25.6898308Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-23T01:09:25.6900135Z         	Messages:   	Project creation failed: test-acc-tf-p-6021291349501238752, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T01:09:25.6901401Z --- FAIL: TestAccMaintenanceWindowAPI_basic (87.38s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 12 seconds
- 2026-05-26

### Error 2026-05-26T02:15:54+00:00
```
2026-05-26T02:15:54.1899065Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-26T02:15:54.1899647Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-2388012328062587668
2026-05-26T02:15:54.1900153Z     resource_test.go:17: 
2026-05-26T02:15:54.1901032Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T02:15:54.1902706Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T02:15:54.1904529Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T02:15:54.1906340Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-26T02:15:54.1907184Z         	Error:      	Received unexpected error:
2026-05-26T02:15:54.1908930Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:54.1909966Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-26T02:15:54.1911607Z         	Messages:   	Project creation failed: test-acc-tf-p-2388012328062587668, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T02:15:54.1912796Z --- FAIL: TestAccMaintenanceWindowAPI_basic (100.00s)
```

- 2026-05-27 PASS 14 seconds
- 2026-05-28

### Error 2026-05-28T01:01:18+00:00
```
2026-05-28T01:01:18.7087121Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-28T01:01:18.7087706Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-7921602689767090216
2026-05-28T01:01:18.7088199Z     resource_test.go:17: 
2026-05-28T01:01:18.7089058Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-28T01:01:18.7090746Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-28T01:01:18.7092381Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-28T01:01:18.7094181Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-28T01:01:18.7094981Z         	Error:      	Received unexpected error:
2026-05-28T01:01:18.7096736Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.7097830Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-28T01:01:18.7099443Z         	Messages:   	Project creation failed: test-acc-tf-p-7921602689767090216, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-28T01:01:18.7100641Z --- FAIL: TestAccMaintenanceWindowAPI_basic (85.25s)
```

- 2026-05-29 PASS 12 seconds
- 2026-05-30

### Error 2026-05-30T01:10:40+00:00
```
2026-05-30T01:10:40.4312424Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-05-30T01:10:40.4313082Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-3545779372211475124
2026-05-30T01:10:40.4313752Z     resource_test.go:17: 
2026-05-30T01:10:40.4314741Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T01:10:40.4316597Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T01:10:40.4318489Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T01:10:40.4320515Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-05-30T01:10:40.4321416Z         	Error:      	Received unexpected error:
2026-05-30T01:10:40.4323543Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4324641Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-05-30T01:10:40.4326447Z         	Messages:   	Project creation failed: test-acc-tf-p-3545779372211475124, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T01:10:40.4327645Z --- FAIL: TestAccMaintenanceWindowAPI_basic (62.12s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 13 seconds
- 2026-06-02

### Error 2026-06-02T01:15:50+00:00
```
2026-06-02T01:15:50.0590232Z === RUN   TestAccMaintenanceWindowAPI_basic
2026-06-02T01:15:50.0590923Z     resource_test.go:17: Creating execution project (1): test-acc-tf-p-7862522291511915275
2026-06-02T01:15:50.0591493Z     resource_test.go:17: 
2026-06-02T01:15:50.0592471Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:15:50.0594449Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:15:50.0596307Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:15:50.0598283Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/serviceapi/maintenancewindowapi/resource_test.go:17
2026-06-02T01:15:50.0599194Z         	Error:      	Received unexpected error:
2026-06-02T01:15:50.0601189Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0602279Z         	Test:       	TestAccMaintenanceWindowAPI_basic
2026-06-02T01:15:50.0604193Z         	Messages:   	Project creation failed: test-acc-tf-p-7862522291511915275, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:15:50.0605498Z --- FAIL: TestAccMaintenanceWindowAPI_basic (72.76s)
```

- 2026-06-03 PASS 14 seconds
- 2026-06-04 PASS 15 seconds
- 2026-06-05 PASS 13 seconds

## QA Environment
### Timeline
- 2026-05-06: MISSING
- 2026-05-07: MISSING
- 2026-05-08: MISSING
- 2026-05-09: MISSING
- 2026-05-10 PASS 12 seconds
- 2026-05-11: MISSING
- 2026-05-12: MISSING
- 2026-05-13: MISSING
- 2026-05-14: MISSING
- 2026-05-15: MISSING
- 2026-05-16: MISSING
- 2026-05-17 PASS 12 seconds
- 2026-05-18: MISSING
- 2026-05-19: MISSING
- 2026-05-20: MISSING
- 2026-05-21: MISSING
- 2026-05-22: MISSING
- 2026-05-23: MISSING
- 2026-05-24 PASS 14 seconds
- 2026-05-25: MISSING
- 2026-05-26: MISSING
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 14 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
