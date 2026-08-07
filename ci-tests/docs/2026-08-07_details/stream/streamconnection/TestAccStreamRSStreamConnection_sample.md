# stream/streamconnection/TestAccStreamRSStreamConnection_sample Test Details
# Found 34 TestRuns in dev, qa from 2026-07-09 to 2026-08-07 from master branch: 1 unique tests, PASS(x 30) FAIL(x 4)
Success rate: 88.24%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-07-09 01:15](#error-2026-07-09t0115210000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.08s
[2026-07-11 01:30](#error-2026-07-11t0130510000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 119.01s
[2026-07-21 00:59](#error-2026-07-21t0059130000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 62.07s
[2026-08-03 01:33](#error-2026-08-03t0133290000) |  | dev | flaky_client | 5.03s

### Timeline
- 2026-07-08: MISSING
- 2026-07-09

### Error 2026-07-09T01:15:21+00:00
```
2026-07-09T01:15:21.5990587Z === RUN   TestAccStreamRSStreamConnection_sample
2026-07-09T01:15:21.5991146Z     resource_stream_connection_test.go:360: Creating execution project (1): test-acc-tf-p-9138775741168077528
2026-07-09T01:15:21.5991632Z     resource_stream_connection_test.go:360: 
2026-07-09T01:15:21.5992392Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-09T01:15:21.5993775Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-09T01:15:21.5995166Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-09T01:15:21.5996680Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-09T01:15:21.5998276Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:360
2026-07-09T01:15:21.5999287Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-09T01:15:21.5999715Z         	Error:      	Received unexpected error:
2026-07-09T01:15:21.6001247Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6002119Z         	Test:       	TestAccStreamRSStreamConnection_sample
2026-07-09T01:15:21.6003505Z         	Messages:   	Project creation failed: test-acc-tf-p-9138775741168077528, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-09T01:15:21.6004415Z --- FAIL: TestAccStreamRSStreamConnection_sample (63.81s)
```

- 2026-07-10 PASS 5 seconds
- 2026-07-11

### Error 2026-07-11T01:30:51+00:00
```
2026-07-11T01:30:51.7317159Z === RUN   TestAccStreamRSStreamConnection_sample
2026-07-11T01:30:51.7318629Z     resource_stream_connection_test.go:360: Creating execution project (1): test-acc-tf-p-2929809615835387586
2026-07-11T01:30:51.7319745Z     resource_stream_connection_test.go:360: 
2026-07-11T01:30:51.7321513Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-11T01:30:51.7324882Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-11T01:30:51.7328270Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-11T01:30:51.7331876Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-11T01:30:51.7335784Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:360
2026-07-11T01:30:51.7338152Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-11T01:30:51.7339300Z         	Error:      	Received unexpected error:
2026-07-11T01:30:51.7342892Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7344822Z         	Test:       	TestAccStreamRSStreamConnection_sample
2026-07-11T01:30:51.7348079Z         	Messages:   	Project creation failed: test-acc-tf-p-2929809615835387586, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-11T01:30:51.7350515Z --- FAIL: TestAccStreamRSStreamConnection_sample (119.11s)
```

- 2026-07-12: MISSING
- 2026-07-13 PASS 5 seconds
- 2026-07-14 PASS 6 seconds
- 2026-07-15 PASS 4 seconds
- 2026-07-16 PASS 8 seconds
- 2026-07-17 PASS 5 seconds
- 2026-07-18 PASS 7 seconds
- 2026-07-19: MISSING
- 2026-07-20: MISSING
- 2026-07-21

### Error 2026-07-21T00:59:13+00:00
```
2026-07-21T00:59:13.3198019Z === RUN   TestAccStreamRSStreamConnection_sample
2026-07-21T00:59:13.3198750Z     resource_stream_connection_test.go:360: Creating execution project (1): test-acc-tf-p-2608408887729476423
2026-07-21T00:59:13.3199400Z     resource_stream_connection_test.go:360: 
2026-07-21T00:59:13.3200399Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-07-21T00:59:13.3202256Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-07-21T00:59:13.3204353Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-07-21T00:59:13.3206202Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-07-21T00:59:13.3208349Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:360
2026-07-21T00:59:13.3209668Z         	            				/opt/hostedtoolcache/go/1.26.4/x64/src/runtime/asm_amd64.s:1771
2026-07-21T00:59:13.3210221Z         	Error:      	Received unexpected error:
2026-07-21T00:59:13.3212221Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3213533Z         	Test:       	TestAccStreamRSStreamConnection_sample
2026-07-21T00:59:13.3215374Z         	Messages:   	Project creation failed: test-acc-tf-p-2608408887729476423, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-07-21T00:59:13.3216762Z --- FAIL: TestAccStreamRSStreamConnection_sample (62.69s)
```

- 2026-07-22 PASS 4 seconds
- 2026-07-23 PASS 4 seconds
- 2026-07-24 PASS 4 seconds
- 2026-07-25 PASS 3 seconds
- 2026-07-26: MISSING
- 2026-07-27 PASS 4 seconds
- 2026-07-28 PASS 4 seconds
- 2026-07-29 PASS 2 seconds
- 2026-07-30 PASS 2 seconds
- 2026-07-31 PASS 2 seconds
- 2026-08-01 PASS 4 seconds
- 2026-08-02: MISSING
- 2026-08-03
  - FAIL 5 seconds

### Error 2026-08-03T01:33:29+00:00
```
2026-08-03T01:33:29.9956767Z === RUN   TestAccStreamRSStreamConnection_sample
2026-08-03T01:33:29.9966536Z    test_name=TestAccStreamRSStreamConnection_sample test_terraform_path=/home/runner/work/_temp/15c4ca8d-89c8-44b4-a2b6-45595e5990a6/terraform
2026-08-03T01:33:29.9967481Z     resource_stream_connection_test.go:364: Step 1/2 error: Error running apply: exit status 1
2026-08-03T01:33:29.9967960Z         
2026-08-03T01:33:29.9968261Z         Error: error creating resource
2026-08-03T01:33:29.9968694Z         
2026-08-03T01:33:29.9969052Z           with mongodbatlas_stream_instance.test,
2026-08-03T01:33:29.9969754Z           on terraform_plugin_test.tf line 26, in resource "mongodbatlas_stream_instance" "test":
2026-08-03T01:33:29.9970424Z           26: 		resource "mongodbatlas_stream_instance" "test" {
2026-08-03T01:33:29.9970773Z         
2026-08-03T01:33:29.9971002Z         Post
2026-08-03T01:33:29.9971573Z         "https://cloud-dev.mongodb.com/api/atlas/v2/groups/6a6fe500aa9e3c145b665a3d/streams":
2026-08-03T01:33:29.9972135Z         dial tcp 23.23.86.210:443: i/o timeout
2026-08-03T01:33:29.9972526Z --- FAIL: TestAccStreamRSStreamConnection_sample (5.30s)
```

  - PASS 3 seconds
  - PASS 3 seconds
- 2026-08-04 PASS 4 seconds
- 2026-08-05 PASS 5 seconds
- 2026-08-06 PASS 4 seconds
- 2026-08-07 PASS 6 seconds

## QA Environment
### Timeline
- 2026-07-08: MISSING
- 2026-07-09: MISSING
- 2026-07-10: MISSING
- 2026-07-11: MISSING
- 2026-07-12 PASS 6 seconds
- 2026-07-13: MISSING
- 2026-07-14: MISSING
- 2026-07-15 PASS 4 seconds
- 2026-07-16: MISSING
- 2026-07-17: MISSING
- 2026-07-18: MISSING
- 2026-07-19 PASS 7 seconds
- 2026-07-20: MISSING
- 2026-07-21: MISSING
- 2026-07-22: MISSING
- 2026-07-23: MISSING
- 2026-07-24: MISSING
- 2026-07-25: MISSING
- 2026-07-26 PASS 6 seconds
- 2026-07-27: MISSING
- 2026-07-28: MISSING
- 2026-07-29
  - PASS 3 seconds
  - PASS 3 seconds
- 2026-07-30: MISSING
- 2026-07-31: MISSING
- 2026-08-01: MISSING
- 2026-08-02 PASS 3 seconds
- 2026-08-03: MISSING
- 2026-08-04: MISSING
- 2026-08-05: MISSING
- 2026-08-06: MISSING
- 2026-08-07: MISSING
