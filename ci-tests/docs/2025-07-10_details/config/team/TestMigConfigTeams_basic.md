# config/team/TestMigConfigTeams_basic Test Details
# Found 115 TestRuns in dev, qa from 2025-04-12 to 2025-07-10 from master branch: 1 unique tests, PASS(x 114) FAIL
Success rate: 99.13%

## Error Table

Date | Details | Env | Runtime
--- | --- | --- | ---
[2025-05-11 00:30](#error-2025-05-11t0030140000) |  | qa | 1.07s

## Timeline
- 2025-04-11: MISSING
- 2025-04-12 PASS 4 seconds
- 2025-04-13 PASS 5 seconds
- 2025-04-14 PASS 5 seconds
- 2025-04-15 PASS 5 seconds
- 2025-04-16
  - PASS 5 seconds
  - PASS 9 seconds
- 2025-04-17 PASS 5 seconds
- 2025-04-18 PASS 5 seconds
- 2025-04-19 PASS 7 seconds
- 2025-04-20 PASS 5 seconds
- 2025-04-21 PASS 7 seconds
- 2025-04-22 PASS 5 seconds
- 2025-04-23 PASS 4 seconds
- 2025-04-24 PASS 7 seconds
- 2025-04-25 PASS 4 seconds
- 2025-04-26 PASS 12 seconds
- 2025-04-27 PASS 7 seconds
- 2025-04-28 PASS 8 seconds
- 2025-04-29 PASS 5 seconds
- 2025-04-30
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-01
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 9 seconds
- 2025-05-02 PASS 7 seconds
- 2025-05-03 PASS 5 seconds
- 2025-05-04 PASS 5 seconds
- 2025-05-05 PASS 8 seconds
- 2025-05-06 PASS 5 seconds
- 2025-05-07 PASS 5 seconds
- 2025-05-08 PASS 5 seconds
- 2025-05-09 PASS 7 seconds
- 2025-05-10 PASS 5 seconds
- 2025-05-11

### Error 2025-05-11T00:30:14+00:00
```
2025-05-11T00:30:14.4629479Z === RUN   TestMigConfigTeams_basic
2025-05-11T00:30:14.4636611Z    test_working_directory=/tmp/plugintest853469025 test_name=TestMigConfigTeams_basic test_terraform_path=/home/runner/work/_temp/9cb30b14-da37-4aae-9179-acc0e8e8f9a4/terraform test_step_number=1
2025-05-11T00:30:14.4638546Z     resource_team_migration_test.go:21: Step 1/2 error: Error running apply: exit status 1
2025-05-11T00:30:14.4639194Z         
2025-05-11T00:30:14.4640223Z         Error: error creating Team information: (503 Service Unavailable) failed to decode response body: undefined response type
2025-05-11T00:30:14.4641018Z         
2025-05-11T00:30:14.4641617Z           with mongodbatlas_team.test,
2025-05-11T00:30:14.4642392Z           on terraform_plugin_test.tf line 14, in resource "mongodbatlas_team" "test":
2025-05-11T00:30:14.4643009Z           14: 		resource "mongodbatlas_team" "test" {
2025-05-11T00:30:14.4643325Z         
2025-05-11T00:30:14.4643574Z --- FAIL: TestMigConfigTeams_basic (1.70s)
```

- 2025-05-12 PASS 4 seconds
- 2025-05-13
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-05-14 PASS 5 seconds
- 2025-05-15 PASS 7 seconds
- 2025-05-16 PASS 7 seconds
- 2025-05-17 PASS 4 seconds
- 2025-05-18 PASS 7 seconds
- 2025-05-19 PASS 5 seconds
- 2025-05-20 PASS 5 seconds
- 2025-05-21 PASS 5 seconds
- 2025-05-22 PASS 4 seconds
- 2025-05-23 PASS 5 seconds
- 2025-05-24 PASS 5 seconds
- 2025-05-25 PASS 6 seconds
- 2025-05-26 PASS 6 seconds
- 2025-05-27 PASS 6 seconds
- 2025-05-28
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-05-29 PASS 5 seconds
- 2025-05-30 PASS 6 seconds
- 2025-05-31 PASS 7 seconds
- 2025-06-01
  - PASS 5 seconds
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 6 seconds
  - PASS 5 seconds
- 2025-06-02
  - PASS 4 seconds
  - PASS 5 seconds
  - PASS 11 seconds
- 2025-06-03 PASS 6 seconds
- 2025-06-04 PASS 6 seconds
- 2025-06-05 PASS 7 seconds
- 2025-06-06 PASS 5 seconds
- 2025-06-07 PASS 7 seconds
- 2025-06-08 PASS 5 seconds
- 2025-06-09 PASS 5 seconds
- 2025-06-10 PASS 7 seconds
- 2025-06-11
  - PASS 7 seconds
  - PASS 4 seconds
- 2025-06-12 PASS 5 seconds
- 2025-06-13 PASS 5 seconds
- 2025-06-14 PASS 5 seconds
- 2025-06-15 PASS 4 seconds
- 2025-06-16 PASS 7 seconds
- 2025-06-17 PASS 7 seconds
- 2025-06-18
  - PASS 5 seconds
  - PASS 5 seconds
- 2025-06-19 PASS 5 seconds
- 2025-06-20 PASS 7 seconds
- 2025-06-21 PASS 5 seconds
- 2025-06-22 PASS 4 seconds
- 2025-06-23 PASS 7 seconds
- 2025-06-24 PASS 5 seconds
- 2025-06-25 PASS 5 seconds
- 2025-06-26 PASS 6 seconds
- 2025-06-27 PASS 8 seconds
- 2025-06-28 PASS 5 seconds
- 2025-06-29 PASS 4 seconds
- 2025-06-30 PASS 6 seconds
- 2025-07-01
  - PASS 5 seconds
  - PASS 6 seconds
  - PASS 7 seconds
  - PASS 5 seconds
  - PASS 7 seconds
  - PASS 5 seconds
- 2025-07-02 PASS 5 seconds
- 2025-07-03 PASS 7 seconds
- 2025-07-04 PASS 5 seconds
- 2025-07-05 PASS 7 seconds
- 2025-07-06 PASS 4 seconds
- 2025-07-07 PASS 5 seconds
- 2025-07-08 PASS 7 seconds
- 2025-07-09 PASS 7 seconds
- 2025-07-10 PASS 4 seconds