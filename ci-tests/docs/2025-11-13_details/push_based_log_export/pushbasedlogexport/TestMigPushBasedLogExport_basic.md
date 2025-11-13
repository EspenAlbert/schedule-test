# push_based_log_export/pushbasedlogexport/TestMigPushBasedLogExport_basic Test Details
# Found 21 TestRuns in dev, qa from 2025-10-15 to 2025-11-13 from master branch: 1 unique tests, PASS(x 20) FAIL
Success rate: 95.24%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-11-07 00:27](#error-2025-11-07t0027540000) | CANNOT_ASSUME_ROLE /api/atlas/v2/groups/690d3d0aa78815557f586d72/pushBasedLogExport | dev | 29.03s

## Timeline
- 2025-10-14: MISSING
- 2025-10-15 PASS a minute
- 2025-10-16 PASS a minute
- 2025-10-17 PASS a minute
- 2025-10-18: MISSING
- 2025-10-19 PASS a minute
- 2025-10-20 PASS a minute
- 2025-10-21: MISSING
- 2025-10-22
  - PASS a minute
  - PASS a minute
- 2025-10-23: MISSING
- 2025-10-24 PASS a minute
- 2025-10-25: MISSING
- 2025-10-26 PASS a minute
- 2025-10-27 PASS a minute
- 2025-10-28: MISSING
- 2025-10-29 PASS a minute
- 2025-10-30: MISSING
- 2025-10-31 PASS a minute
- 2025-11-01: MISSING
- 2025-11-02 PASS a minute
- 2025-11-03 PASS a minute
- 2025-11-04: MISSING
- 2025-11-05
  - PASS a minute
  - PASS a minute
- 2025-11-06: MISSING
- 2025-11-07

### Error 2025-11-07T00:27:54+00:00
```
2025-11-07T00:27:54.1024761Z === RUN   TestMigPushBasedLogExport_basic
2025-11-07T00:27:54.1027757Z     resource_migration_test.go:11: Creating execution project: test-acc-tf-p-6365290758727676337
2025-11-07T00:28:18.5616121Z    test_working_directory=/tmp/plugintest1759635947 test_step_number=1
2025-11-07T00:28:18.5617221Z     resource_migration_test.go:11: Step 1/2 error: Error running apply: exit status 1
2025-11-07T00:28:18.5617920Z         
2025-11-07T00:28:18.5618643Z         Error: Error when creating push-based log export configuration
2025-11-07T00:28:18.5619517Z         
2025-11-07T00:28:18.5620164Z           with mongodbatlas_push_based_log_export.test,
2025-11-07T00:28:18.5621394Z           on terraform_plugin_test.tf line 148, in resource "mongodbatlas_push_based_log_export" "test":
2025-11-07T00:28:18.5622581Z          148: 			   resource "mongodbatlas_push_based_log_export" "test" {
2025-11-07T00:28:18.5623186Z         
2025-11-07T00:28:18.5624210Z         https://cloud-dev.mongodb.com/api/atlas/v2/groups/690d3d0aa78815557f586d72/pushBasedLogExport
2025-11-07T00:28:18.5625529Z         POST: HTTP 400 Bad Request (Error code: "CANNOT_ASSUME_ROLE") Detail: Atlas
2025-11-07T00:28:18.5626403Z         cannot assume the specified role
2025-11-07T00:28:18.5627482Z         ([arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2735666734074713271-policy]).
2025-11-07T00:28:18.5628350Z         Reason: Bad Request. Params:
2025-11-07T00:28:18.5629832Z         [[arn:aws:iam::358363220050:role/mongodb-atlas-test-acc-tf-2735666734074713271-policy]],
2025-11-07T00:28:18.5630726Z         BadRequestDetail: 
2025-11-07T00:28:23.3594601Z --- FAIL: TestMigPushBasedLogExport_basic (29.26s)
```

- 2025-11-08: MISSING
- 2025-11-09 PASS a minute
- 2025-11-10 PASS a minute
- 2025-11-11: MISSING
- 2025-11-12 PASS a minute
- 2025-11-13 PASS a minute