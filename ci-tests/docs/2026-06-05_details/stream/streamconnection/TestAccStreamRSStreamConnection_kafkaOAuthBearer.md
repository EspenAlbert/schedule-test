# stream/streamconnection/TestAccStreamRSStreamConnection_kafkaOAuthBearer Test Details
# Found 35 TestRuns in dev, qa from 2026-05-07 to 2026-06-05 from master branch: 1 unique tests, PASS(x 28) FAIL(x 7)
Success rate: 80.00%

## DEV Environment
## Error Table

Date | Details | Env | Error Class | Runtime
--- | --- | --- | --- | ---
[2026-05-07 02:51](#error-2026-05-07t0251440000) |  | dev |  | 9.02s
[2026-05-09 01:47](#error-2026-05-09t0147380000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 63.07s
[2026-05-16 01:46](#error-2026-05-16t0146080000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 83.08s
[2026-05-23 02:16](#error-2026-05-23t0216580000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 122.08s
[2026-05-26 03:14](#error-2026-05-26t0314060000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 73.01s
[2026-05-30 02:30](#error-2026-05-30t0230490000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 96.06s
[2026-06-02 01:54](#error-2026-06-02t0154340000) | UNEXPECTED_ERROR /api/atlas/v2/groups | dev | flaky_500 | 120.06s

### Timeline
- 2026-05-06: MISSING
- 2026-05-07
  - FAIL 9 seconds

### Error 2026-05-07T02:51:44+00:00
```
2026-05-07T02:51:44.8373228Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-07T02:51:44.8407790Z === CONT  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-07T02:51:44.8442857Z === NAME  TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-07T02:51:44.8444048Z     resource_stream_connection_test.go:217: Step 2/3 error: Error running apply: exit status 1
2026-05-07T02:51:44.8444892Z         
2026-05-07T02:51:44.8445634Z         Error: Provider produced inconsistent result after apply
2026-05-07T02:51:44.8446285Z         
2026-05-07T02:51:44.8447158Z         When applying changes to mongodbatlas_stream_connection.test, provider
2026-05-07T02:51:44.8448886Z         "provider[\"registry.terraform.io/hashicorp/mongodbatlas\"]" produced an
2026-05-07T02:51:44.8449906Z         unexpected new value: .bootstrap_servers: was
2026-05-07T02:51:44.8450717Z         cty.StringVal("localhost:9093"), but now
2026-05-07T02:51:44.8451538Z         cty.StringVal("localhost:9092,localhost:9092").
2026-05-07T02:51:44.8452112Z         
2026-05-07T02:51:44.8453009Z         This is a bug in the provider, which should be reported in the provider's own
2026-05-07T02:51:44.8453832Z         issue tracker.
2026-05-07T02:51:44.8456413Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (9.23s)
```

  - PASS 11 seconds
- 2026-05-08 PASS 12 seconds
- 2026-05-09
  - PASS 11 seconds
  - FAIL a minute

### Error 2026-05-09T01:47:38+00:00
```
2026-05-09T01:47:38.1057466Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-09T01:47:38.1058188Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-1257371490210820542
2026-05-09T01:47:38.1058809Z     resource_stream_connection_test.go:188: 
2026-05-09T01:47:38.1059995Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-09T01:47:38.1062103Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-09T01:47:38.1064025Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-09T01:47:38.1065833Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-09T01:47:38.1067910Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-05-09T01:47:38.1069195Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-09T01:47:38.1069726Z         	Error:      	Received unexpected error:
2026-05-09T01:47:38.1071678Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1073137Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-09T01:47:38.1074948Z         	Messages:   	Project creation failed: test-acc-tf-p-1257371490210820542, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-09T01:47:38.1076199Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (63.70s)
```

- 2026-05-10: MISSING
- 2026-05-11 PASS 12 seconds
- 2026-05-12 PASS 11 seconds
- 2026-05-13 PASS 14 seconds
- 2026-05-14 PASS 12 seconds
- 2026-05-15 PASS 13 seconds
- 2026-05-16

### Error 2026-05-16T01:46:08+00:00
```
2026-05-16T01:46:08.0844507Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-16T01:46:08.0845218Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-1870295892584333797
2026-05-16T01:46:08.0845829Z     resource_stream_connection_test.go:188: 
2026-05-16T01:46:08.0846794Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-16T01:46:08.0848616Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-16T01:46:08.0850442Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-16T01:46:08.0852277Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-16T01:46:08.0854749Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-05-16T01:46:08.0856047Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-16T01:46:08.0856574Z         	Error:      	Received unexpected error:
2026-05-16T01:46:08.0858538Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0859667Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-16T01:46:08.0861494Z         	Messages:   	Project creation failed: test-acc-tf-p-1870295892584333797, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-16T01:46:08.0862756Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (83.82s)
```

- 2026-05-17: MISSING
- 2026-05-18 PASS 11 seconds
- 2026-05-19 PASS 14 seconds
- 2026-05-20
  - PASS 12 seconds
  - PASS 11 seconds
- 2026-05-21 PASS 13 seconds
- 2026-05-22 PASS 13 seconds
- 2026-05-23

### Error 2026-05-23T02:16:58+00:00
```
2026-05-23T02:16:58.5061710Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-23T02:16:58.5062890Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-9013495694258366889
2026-05-23T02:16:58.5064005Z     resource_stream_connection_test.go:188: 
2026-05-23T02:16:58.5065570Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-23T02:16:58.5068534Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-23T02:16:58.5071499Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-23T02:16:58.5074617Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-23T02:16:58.5078047Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-05-23T02:16:58.5080132Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-23T02:16:58.5080992Z         	Error:      	Received unexpected error:
2026-05-23T02:16:58.5084313Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5086073Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-23T02:16:58.5089017Z         	Messages:   	Project creation failed: test-acc-tf-p-9013495694258366889, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-23T02:16:58.5091007Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (122.76s)
```

- 2026-05-24: MISSING
- 2026-05-25 PASS 13 seconds
- 2026-05-26

### Error 2026-05-26T03:14:06+00:00
```
2026-05-26T03:14:06.8651380Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-26T03:14:06.8652109Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-174011219440797165
2026-05-26T03:14:06.8652729Z     resource_stream_connection_test.go:188: 
2026-05-26T03:14:06.8653688Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-26T03:14:06.8655504Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-26T03:14:06.8657325Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-26T03:14:06.8659420Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-26T03:14:06.8661522Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-05-26T03:14:06.8662830Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-26T03:14:06.8663360Z         	Error:      	Received unexpected error:
2026-05-26T03:14:06.8665373Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8666516Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-26T03:14:06.8668585Z         	Messages:   	Project creation failed: test-acc-tf-p-174011219440797165, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-26T03:14:06.8669879Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (73.06s)
```

- 2026-05-27 PASS 9 seconds
- 2026-05-28 PASS 21 seconds
- 2026-05-29 PASS 10 seconds
- 2026-05-30

### Error 2026-05-30T02:30:49+00:00
```
2026-05-30T02:30:49.6559752Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-30T02:30:49.6560526Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-5098954395546298191
2026-05-30T02:30:49.6561524Z     resource_stream_connection_test.go:188: 
2026-05-30T02:30:49.6562554Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-05-30T02:30:49.6564367Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-05-30T02:30:49.6566167Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-05-30T02:30:49.6567973Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-05-30T02:30:49.6570046Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-05-30T02:30:49.6571645Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-05-30T02:30:49.6572221Z         	Error:      	Received unexpected error:
2026-05-30T02:30:49.6574186Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6575299Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-05-30T02:30:49.6577086Z         	Messages:   	Project creation failed: test-acc-tf-p-5098954395546298191, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-05-30T02:30:49.6578303Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (96.55s)
```

- 2026-05-31: MISSING
- 2026-06-01 PASS 6 seconds
- 2026-06-02

### Error 2026-06-02T01:54:34+00:00
```
2026-06-02T01:54:34.5507706Z === RUN   TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-06-02T01:54:34.5508411Z     resource_stream_connection_test.go:188: Creating execution project (1): test-acc-tf-p-42965373064443265
2026-06-02T01:54:34.5509163Z     resource_stream_connection_test.go:188: 
2026-06-02T01:54:34.5510079Z         	Error Trace:	/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/atlas.go:23
2026-06-02T01:54:34.5511767Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:142
2026-06-02T01:54:34.5513490Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:98
2026-06-02T01:54:34.5515344Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/testutil/acc/shared_resource.go:214
2026-06-02T01:54:34.5517273Z         	            				/home/runner/work/terraform-provider-mongodbatlas/terraform-provider-mongodbatlas/internal/service/streamconnection/resource_stream_connection_test.go:188
2026-06-02T01:54:34.5518485Z         	            				/opt/hostedtoolcache/go/1.26.1/x64/src/runtime/asm_amd64.s:1771
2026-06-02T01:54:34.5519138Z         	Error:      	Received unexpected error:
2026-06-02T01:54:34.5522368Z         	            	https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5523459Z         	Test:       	TestAccStreamRSStreamConnection_kafkaOAuthBearer
2026-06-02T01:54:34.5525644Z         	Messages:   	Project creation failed: test-acc-tf-p-42965373064443265, err: https://cloud-dev.mongodb.com/api/atlas/v2/groups POST: HTTP 500 Internal Server Error (Error code: "UNEXPECTED_ERROR") Detail: Unexpected error. Reason: Internal Server Error. Params: [], BadRequestDetail: 
2026-06-02T01:54:34.5526844Z --- FAIL: TestAccStreamRSStreamConnection_kafkaOAuthBearer (120.55s)
```

- 2026-06-03 PASS 6 seconds
- 2026-06-04 PASS 10 seconds
- 2026-06-05 PASS 5 seconds

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
- 2026-05-24 PASS 11 seconds
- 2026-05-25 PASS 14 seconds
- 2026-05-26 PASS 13 seconds
- 2026-05-27: MISSING
- 2026-05-28: MISSING
- 2026-05-29: MISSING
- 2026-05-30: MISSING
- 2026-05-31 PASS 7 seconds
- 2026-06-01: MISSING
- 2026-06-02: MISSING
- 2026-06-03: MISSING
- 2026-06-04: MISSING
- 2026-06-05: MISSING
