# autogen_slow/streamprocessorapi/TestAccStreamProcessorAPI_basic Test Details
# Found 9 TestRuns in dev, qa from 2026-09-07 to 2026-09-14 from master branch: 1 unique tests, PASS(x 7) FAIL(x 2)
Success rate: 77.78%

## DEV Environment
## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2026-09-09 04:45](#error-2026-09-09t0445050000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa0ac14567d318b5304acf8/streams/test-acc-tf-3322587920140763/processor | dev | 6.04s
[2026-09-10 01:33](#error-2026-09-10t0133060000) | STREAM_PROCESSOR_GENERIC_ERROR /api/atlas/v2/groups/6aa1fd125b8d9510e89258c7/streams/test-acc-tf-3930087001117429183/processor | dev | 4.09s

### Timeline
- 2026-09-07 PASS 30 seconds
- 2026-09-08 PASS 28 seconds
- 2026-09-09

### Error 2026-09-09T04:45:05+00:00
```
2026-09-09T04:45:05.5608735Z === RUN   TestAccStreamProcessorAPI_basic
2026-09-09T04:45:05.5609314Z     resource_test.go:41: Creating execution project (1): test-acc-tf-p-2724713698675782301
2026-09-09T04:45:05.5610388Z === CONT  TestAccStreamProcessorAPI_basic
2026-09-09T04:45:05.5626114Z   
2026-09-09T04:45:05.5626533Z     resource_test.go:47: Step 1/4 error: Error running apply: exit status 1
2026-09-09T04:45:05.5626943Z         
2026-09-09T04:45:05.5627264Z         Error: Error calling API in Create
2026-09-09T04:45:05.5627573Z         
2026-09-09T04:45:05.5627961Z           with mongodbatlas_stream_processor_api.test,
2026-09-09T04:45:05.5628712Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor_api" "test":
2026-09-09T04:45:05.5629421Z           32: 		resource "mongodbatlas_stream_processor_api" "test" {
2026-09-09T04:45:05.5630062Z         
2026-09-09T04:45:05.5630879Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ac14567d318b5304acf8/streams/test-acc-tf-3322587920140763/processor
2026-09-09T04:45:05.5631753Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-09T04:45:05.5632454Z         Detail: Streams Processor with this name (test-acc-tf-1152781129044703412)
2026-09-09T04:45:05.5633144Z         had a problem occur: commandName does not exist in context. Reason: Bad
2026-09-09T04:45:05.5633840Z         Request. Params: [test-acc-tf-1152781129044703412 commandName does not exist
2026-09-09T04:45:05.5634354Z         in context], BadRequestDetail: 
2026-09-09T04:45:05.5647336Z   
2026-09-09T04:45:05.5647858Z     panic.go:694: Error running post-test destroy, there may be dangling resources: exit status 1
2026-09-09T04:45:05.5648350Z         
2026-09-09T04:45:05.5648670Z         Error: Error calling API in Delete
2026-09-09T04:45:05.5648979Z         
2026-09-09T04:45:05.5649899Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa0ac14567d318b5304acf8/streams/test-acc-tf-3322587920140763
2026-09-09T04:45:05.5650599Z         DELETE: HTTP 403 Forbidden (Error code:
2026-09-09T04:45:05.5651187Z         "STREAM_TENANT_HAS_STREAM_PROCESSORS") Detail: Stream workspace with name
2026-09-09T04:45:05.5651893Z         test-acc-tf-3322587920140763 has active processors, and cannot be changed.
2026-09-09T04:45:05.5652619Z         Reason: Forbidden. Params: [test-acc-tf-3322587920140763], BadRequestDetail: 
2026-09-09T04:45:05.5653116Z --- FAIL: TestAccStreamProcessorAPI_basic (6.42s)
```

- 2026-09-10

### Error 2026-09-10T01:33:06+00:00
```
2026-09-10T01:33:06.1353176Z === RUN   TestAccStreamProcessorAPI_basic
2026-09-10T01:33:06.1353765Z     resource_test.go:41: Creating execution project (1): test-acc-tf-p-3670491663015299055
2026-09-10T01:33:06.1354610Z === CONT  TestAccStreamProcessorAPI_basic
2026-09-10T01:33:06.1370586Z   
2026-09-10T01:33:06.1371007Z     resource_test.go:47: Step 1/4 error: Error running apply: exit status 1
2026-09-10T01:33:06.1371427Z         
2026-09-10T01:33:06.1371745Z         Error: Error calling API in Create
2026-09-10T01:33:06.1372050Z         
2026-09-10T01:33:06.1372443Z           with mongodbatlas_stream_processor_api.test,
2026-09-10T01:33:06.1373219Z           on terraform_plugin_test.tf line 32, in resource "mongodbatlas_stream_processor_api" "test":
2026-09-10T01:33:06.1373935Z           32: 		resource "mongodbatlas_stream_processor_api" "test" {
2026-09-10T01:33:06.1374312Z         
2026-09-10T01:33:06.1375732Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/6aa1fd125b8d9510e89258c7/streams/test-acc-tf-3930087001117429183/processor
2026-09-10T01:33:06.1377388Z         POST: HTTP 400 Bad Request (Error code: "STREAM_PROCESSOR_GENERIC_ERROR")
2026-09-10T01:33:06.1378912Z         Detail: Streams Processor with this name (test-acc-tf-151830299481931582) had
2026-09-10T01:33:06.1380274Z         a problem occur: commandName does not exist in context. Reason: Bad Request.
2026-09-10T01:33:06.1381484Z         Params: [test-acc-tf-151830299481931582 commandName does not exist in
2026-09-10T01:33:06.1382547Z         context], BadRequestDetail: 
2026-09-10T01:33:06.1383210Z --- FAIL: TestAccStreamProcessorAPI_basic (4.86s)
```

- 2026-09-11
  - PASS 29 seconds
  - PASS 30 seconds
- 2026-09-12 PASS 28 seconds
- 2026-09-13: MISSING
- 2026-09-14 PASS 31 seconds

## QA Environment
### Timeline
- 2026-09-07: MISSING
- 2026-09-08: MISSING
- 2026-09-09: MISSING
- 2026-09-10: MISSING
- 2026-09-11: MISSING
- 2026-09-12: MISSING
- 2026-09-13 PASS 30 seconds
- 2026-09-14: MISSING
