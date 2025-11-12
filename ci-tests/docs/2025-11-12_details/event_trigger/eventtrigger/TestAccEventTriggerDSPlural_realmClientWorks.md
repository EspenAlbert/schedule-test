# event_trigger/eventtrigger/TestAccEventTriggerDSPlural_realmClientWorks Test Details
# Found 31 TestRuns in dev, qa from 2025-10-04 to 2025-11-12 from master branch: 1 unique tests, PASS(x 30) FAIL
Success rate: 96.77%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-10-13 00:29](#error-2025-10-13t0029230000) |  | dev | 22.09s

## Timeline
- 2025-10-03: MISSING
- 2025-10-04 PASS 4 seconds
- 2025-10-05 PASS 3 seconds
- 2025-10-06 PASS 4 seconds
- 2025-10-07 PASS 4 seconds
- 2025-10-08 PASS 4 seconds
- 2025-10-09 PASS 5 seconds
- 2025-10-10 PASS 2 seconds
- 2025-10-11 PASS 3 seconds
- 2025-10-12 PASS 2 seconds
- 2025-10-13

### Error 2025-10-13T00:29:23+00:00
```
2025-10-13T00:29:23.9189758Z === RUN   TestAccEventTriggerDSPlural_realmClientWorks
2025-10-13T00:29:23.9190431Z     data_source_event_triggers_test.go:57: Creating execution project: test-acc-tf-p-6516400958051731977
2025-10-13T00:29:26.3383096Z === CONT  TestAccEventTriggerDSPlural_realmClientWorks
2025-10-13T00:29:46.7947983Z   diagnostic_summary=
2025-10-13T00:29:46.7951052Z    tf_provider_addr=registry.terraform.io/hashicorp/mongodbatlas tf_rpc=ReadDataSource tf_req_id=0f49fe66-3ad4-1fb4-4444-6bdd533a28e1 tf_proto_version=6.10 tf_data_source_type=mongodbatlas_event_triggers
2025-10-13T00:29:46.8023538Z   
2025-10-13T00:29:46.8024318Z     data_source_event_triggers_test.go:60: Step 1/1, expected an error with pattern, no match on: Error running pre-apply plan: exit status 1
2025-10-13T00:29:46.8025195Z         
2025-10-13T00:29:46.8025562Z         Error: cannot fetch token: 500 Internal Server Error
2025-10-13T00:29:46.8026170Z         Response: {"error":"error processing request","error_code":"InternalServerError"}
2025-10-13T00:29:46.8026566Z         
2025-10-13T00:29:46.8026907Z           with data.mongodbatlas_event_triggers.this,
2025-10-13T00:29:46.8027743Z           on terraform_plugin_test.tf line 12, in data "mongodbatlas_event_triggers" "this":
2025-10-13T00:29:46.8028512Z           12: 		data "mongodbatlas_event_triggers" "this" {
2025-10-13T00:29:46.8029103Z         
2025-10-13T00:29:46.8246120Z --- FAIL: TestAccEventTriggerDSPlural_realmClientWorks (22.91s)
```

- 2025-10-14 PASS 3 seconds
- 2025-10-15 PASS 3 seconds
- 2025-10-16 PASS 2 seconds
- 2025-10-17 PASS 3 seconds
- 2025-10-18: MISSING
- 2025-10-19 PASS 4 seconds
- 2025-10-20 PASS 4 seconds
- 2025-10-21: MISSING
- 2025-10-22
  - PASS 3 seconds
  - PASS 2 seconds
- 2025-10-23: MISSING
- 2025-10-24 PASS 3 seconds
- 2025-10-25: MISSING
- 2025-10-26 PASS 6 seconds
- 2025-10-27 PASS 2 seconds
- 2025-10-28: MISSING
- 2025-10-29 PASS 3 seconds
- 2025-10-30: MISSING
- 2025-10-31 PASS 4 seconds
- 2025-11-01: MISSING
- 2025-11-02 PASS 2 seconds
- 2025-11-03 PASS 5 seconds
- 2025-11-04: MISSING
- 2025-11-05
  - PASS 5 seconds
  - PASS 3 seconds
- 2025-11-06: MISSING
- 2025-11-07 PASS 4 seconds
- 2025-11-08: MISSING
- 2025-11-09 PASS 3 seconds
- 2025-11-10 PASS 3 seconds
- 2025-11-11: MISSING
- 2025-11-12 PASS 4 seconds